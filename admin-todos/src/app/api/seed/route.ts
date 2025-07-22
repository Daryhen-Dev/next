import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
export async function GET(request: Request) {
    await prisma.todo.deleteMany();
    await prisma.todo.createMany({
        data: [
            { description: 'Learn Next.js', complete: true },
            { description: 'Learn Prisma', complete: false },
            { description: 'Build a full-stack app', complete: true },
        ],
    });
  return NextResponse.json({
    message: 'Seed executed successfully',
  })
}