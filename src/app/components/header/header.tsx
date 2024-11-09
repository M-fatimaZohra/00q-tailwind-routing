import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="lg:flex py-4 px-3 w-full lg:h-20 md:h-36 bg-slate-50 text-black ">
         <h1 className="lg:text-4xl  md:text-5xl text-3xl text-center lg:w-1/2"><Link href='./'> Fatima Zohra </Link></h1>
        <div className='lg:w-1/2'>
          <ul className='flex justify-center mx-auto items-center '>
                <li className=' lg:mx-4 md:mx-1 p-3 lg:text-base  md:text-lg  text-xs hover:rounded-full hover:bg-black hover:text-white hover:duration-1000'><Link href='/About'> About</Link></li>
                <li className=' lg:mx-4 md:mx-1 p-3 lg:text-base  md:text-lg text-xs hover:rounded-full hover:bg-black hover:text-white hover:duration-1000' ><Link href='/Contact'> Contact</Link></li>
                <li className=' lg:mx-4 md:mx-1 p-3 lg:text-base  md:text-lg text-xs hover:rounded-full hover:bg-black hover:text-white hover:duration-1000'><Link href='/Projects'> Projects</Link></li>
            </ul>
        </div>
    </header>
    // Note For Me 2:56PM 9-nov-2024:this is best header i ever made, going to use it as template in future! 
  )
}

export default Header
