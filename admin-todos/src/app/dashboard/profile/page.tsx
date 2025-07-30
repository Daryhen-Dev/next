'use client'

import Email from 'next-auth/providers/email'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function page() {
const  {data: session} = useSession()


    
  return (
    <div>
        <h1>Page profile</h1>
        <hr/>
        <div className='flex flex-col'>
            <span>{session?.user?.name ?? 'No hay nombre'}</span>
            <span>{session?.user?.email ?? 'No hay email'}</span>
            <span>{session?.user?.image ?? 'No hay imagen'}</span>
            <span>{session?.user?.id ?? 'No UUID'}</span>
            <span>{session?.user?.roles?.join(',') ?? 'No hay imagen'}</span>
        </div>
    </div>
  )
}
