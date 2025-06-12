import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='mb-30'>
        <nav className="fixed top-0 z-50 w-full h-20 px-10 flex items-center justify-between 
    bg-gradient-to-r bg-black/10 backdrop-blur-3xl text-white">
            
            <div className='flex gap-3 items-center '>
                <Image 
                src={'/cypresslogo.svg'}
                alt='logo'
                width={40}
                height={40}
                />
                <h2 className='text-2xl font-semibold'>Cypress</h2>
            </div>
            <div className='flex items-center gap-5 text-white'>
                <Link href='/login' className='cursor-pointer border-1 p-2 px-7 border-washed-blue-300 rounded-lg bg-gradient-to-r from-neutral-800'>
                    Login
                </Link>
                <Link href='/sign-up' className='cursor-pointer'>
                    Sign Up
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Header