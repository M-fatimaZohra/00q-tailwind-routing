import React from 'react'

function Contact() {
  return (
    <div className='font-mono h-40 my-10  text-center' >
      <div className=" border-solid border-white border-[5px] rounded-lg  m-8">
        <h1 className="md:text-6xl lg:text-5xl text-3xl  lg:p-5 p-2 pb-0">Contact</h1>
        <div>
          <div className='lg:py-5 py-3'>
          <p className="text-[15px] md:text-sm lg:text-lg lg:py-5 pl-4 first-letter:text-2xl lg:first-letter:text-4xl">Follow me & see my work on:  </p> 
      <ul className='m-4 text-[15px] md:text-sm lg:text-lg lg:py-5 lg:pl-4'>
        <li><a href='https://www.linkedin.com/in/fatima-zohra-4a1b712b4/' className='hover:underline'>LinkedIn</a></li>
        <li><a href='https://github.com/M-fatimaZohra' className='hover:underline'>GitHub</a></li>
        <li><a href='https://www.npmjs.com/~fatima_zohra10122007' className='hover:underline'>NPM</a></li>
      </ul>
    </div>
          <div className='py-5 px-6'>
          <textarea placeholder='Enter your Query' id="email" className="w-3/4 p-4 lg:h-32 h-16 rounded-lg border-[3px] text-xs lg:text-base border-gray-300 focus:border-blue-500 focus:outline-none resize-none"></textarea>
        <div className='text-center py-3'> <input type='submit' value="Submit" className='bg-slate-50 w-20 h-19 text-black active:bg-slate-300 '></input></div>
          </div>
        </div>
        </div> 
    </div>
  )
}

export default Contact
