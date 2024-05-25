"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

function Header() {
  const router = useRouter();
  return (
    <div className='py-6 sticky shadow-md z-[999] mb-4 bg-white w-full top-0'>
      <div className='w-[calc(100%-50px)] mx-auto justify-between flex'>
        <p className='text-3xl font-medium cursor-pointer' onClick={()=> router.push("/") } >BiEnd</p>
      </div>
    </div>
  )
}

export default Header
