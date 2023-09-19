import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.png'

function Navbar() {
  return (
    <nav className="w-full px-auto flex flex-row justify-between px-4 sm:max-3xl:px-8 items-center bg-gray-600 mb-3">
        <Link href='/' className='flex justify-between items-center'>
            <Image
            src={logo}
            width={null}
            className='m-0 p-0 w-20 sm:max-3xl:w-24'
            alt="logo"
            />
            <h1 className=" text-2xl sm:max-3xl:text-3xl m-0 font-Megrim font-extrabold">BlogON</h1>
        </Link>
        <Link href='/newPost' className="text-sm border-2 bg-slate-800 p-2 sm:max-3xl:p-3 sm:max-3xl:text-base rounded-lg font-medium hover:bg-slate-600 transition-all duration-500">
            NEW BLOG
        </Link>
    </nav>
    
  )
}

export default Navbar
