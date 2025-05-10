import { HomeIcon } from '@primer/octicons-react'
import { ActiveLink } from '../active-link/ActiveLink'
import Link from 'next/link'
import React from 'react'

const navItems = [
  { path: 'about', text: 'About' },
  { path: 'pricing', text: 'Pricing' },
  { path: 'contact', text: 'Contact' },
]


export const Navbar = async () => {
  return (
    <nav className='flex bg-blue-800 opacity-70 p-2 m-2 rounded'>
      <Link href={'/'} className='flex items-center'>
        <HomeIcon className='mr-2' />
        <span>Home</span>
      </Link>
      <div className='flex flex-1'></div>
      {
        navItems.map((item, index) => (
          <ActiveLink path={item.path} text={item.text} key={index} {...navItems} />
        ))
      }
    </nav>
  )
}

