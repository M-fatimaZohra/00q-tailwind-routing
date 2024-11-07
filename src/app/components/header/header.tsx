import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex py-4 px-3 w-full h-20 bg-slate-50 text-black ">
         <h1 className="lg:text-4xl  text-3xl w-1/2"><Link href='./'> Fatima Zohra </Link></h1>
        <div className='w-1/2'>
          <ul className='flex justify-center '>
                <li className=' lg:mx-4 mx-2 p-3  hover:rounded-full hover:bg-black hover:text-white hover:duration-1000'><Link href='/About'> About</Link></li>
                <li className=' lg:mx-4 mx-2 p-3  hover:rounded-full hover:bg-black hover:text-white hover:duration-1000' ><Link href='/Contact'> Contact</Link></li>
                <li className=' lg:mx-4 mx-2 p-3  hover:rounded-full hover:bg-black hover:text-white hover:duration-1000'><Link href='/Projects'> Projects</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header
