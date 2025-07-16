import { WidgetsGrid } from '@/components/dashboard/WidgetsGrid'
import React from 'react'

export default function page() {
  return (
    <div className='text-black'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Información general</span>
        <WidgetsGrid />
      </div>
  )
}
