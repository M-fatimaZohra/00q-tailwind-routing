import React from 'react'

function About() {
  return (
    <div className='font-mono my-5 mx-5 md:my-10 md:mx-10'>
  <div className=" m-8 p-8 border-solid border-white border-[5px] rounded-lg hover:bg-white hover:text-black hover:duration-500 ">
    <h1 className="md:text-6xl text-5xl  p-5 pb-0">About</h1>
    <p className="text-sm lg:text-lg py-5 pl-4 first-letter:text-4xl">
      Hi, I’m Fatima Zohra, a web developer from Pakistan. I enjoy creating
      websites that are both functional and visually appealing. I’m currently
      learning tools like Next.js and Tailwind CSS to build responsive and
      modern web applications. Besides coding, I have a few creative hobbies
      like sketching and translating poetry.
    </p>
  </div>
  <div className=" m-8 p-8 border-solid border-white border-[5px] rounded-lg hover:bg-white hover:text-black hover:duration-500 ">
  <h1 className="md:text-6xl text-5xl  p-5 pb-0">Skills</h1>
    <p className="text-sm lg:text-lg  lg:py-5 lg:pl-4 first-letter:text-4xl">
      I have Skills in: </p>
      <ul className='text-sm lg:text-lg lg:py-5 lg:pl-4'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>TYPESCRIPT</li>
        <li>NEXT.JS</li>
        <li>NODE.JS</li>
        <li>TAILWIND CSS</li>
        <li>FIGMA</li>
      </ul>
    
  </div>
</div>

  )
}

export default About
