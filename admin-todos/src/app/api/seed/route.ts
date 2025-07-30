import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  await prisma.todo.deleteMany();  
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: 'test1@google.com',
      password: bcrypt.hashSync('123456'),
      roles: ['admin', 'client','super-user'],
      todos: {
        create: [
          {description: 'Piedra del alma', complete: true},
          {description: 'Piedra del poder', complete: true},
          {description: 'Piedra del tiempo', complete: true},
          {description: 'Piedra del espacio', complete: true},
          {description: 'Piedra de la realidad', complete: true},
        ]
      }
    }
  });
    // await prisma.todo.createMany({
    //     data: [
    //         { description: 'Learn Next.js', complete: true },
    //         { description: 'Learn Prisma', complete: false },
    //         { description: 'Build a full-stack app', complete: true },
    //     ],
    // });
  return NextResponse.json({
    message: 'Seed executed successfully',
  })
}