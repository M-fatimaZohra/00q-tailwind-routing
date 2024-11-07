import React from 'react'

function Contact() {
  return (
    <div className='font-mono h-40 my-10  text-center' >
      <div className=" border-solid border-white border-[5px] rounded-lg  m-8">
        <h1 className="text-6xl  p-5 pb-0">Contact</h1>
        <div>
          <div className='py-5'>
          <p className="text-lg  first-letter:text-4xl">
         Follow me & see my work on:  </p> 
      <ul className='m-4 text-lg'>
        <li><a href='https://www.linkedin.com/in/fatima-zohra-4a1b712b4/' className='hover:underline'>LinkedIn</a></li>
        <li><a href='https://github.com/M-fatimaZohra' className='hover:underline'>GitHub</a></li>
        <li><a href='https://www.npmjs.com/~fatima_zohra10122007' className='hover:underline'>NPM</a></li>
      </ul>
    </div>
          <div className='py-5 px-0'>
          <textarea placeholder='Enter your Query' id="email" className="w-3/4 p-4 h-32 rounded-lg border-[3px] border-gray-300 focus:border-blue-500 focus:outline-none resize-none"></textarea>
        <div className='text-right py-5 px-0 mx-44'> <input type='submit' value="Submit" className='bg-slate-50 w-20 h-19 text-black active:bg-slate-300 left '></input></div>
          </div>
        </div>
        </div> 
    </div>
  )
}

export default Contact
