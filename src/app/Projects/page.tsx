import React from "react";
import Image from "next/image";

function Service() {
  return (
    <div className="font-mono h-40 my-10 mx-5  ">
      <h1 className="lg:text-5xl text-4xl p-5 pb-0 underline text-center">My Projects</h1>
      <div>
        <h2 className="lg:text-3xl text-2xl p-5 pb-0 underline">Class Assignments</h2>

        <table className="w-full border-separate border-spacing-4">
  <tbody>
    <tr className="flex flex-wrap justify-center  space-x-4 space-y-4">
      <td></td>
      <td className="p-4 rounded-2xl bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-400 text-center max-w-xs">
        <a href="https://00-website-paths.vercel.app/" target="_blank" >
          <div className="flex justify-center">
            <Image src="/project1.png" alt="Screenshot of 00 Website Paths project" width={500} height={100} />
          </div>
        </a>
        <h3 className="text-black text-lg font-bold mt-4">00 Website Paths</h3>
        <p className="text-left text-black mt-2">
        - Create About, Contact Us, and Service Page<br />
          - In Service, create nested pages (app-development & website-development)<br />
          - Link them via Next.js Link Tag
        </p>
        <br/>
        <a href="https://github.com/M-fatimaZohra/00_website_paths.git" target="_blank" className="text-black font-bold hover:underline">See Code on GitHub...</a>
      </td>


      <td className="p-4 rounded-2xl bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-400 text-center max-w-xs">
        <a href="https://01-homepage-component.vercel.app/" target="_blank" >
          <div className="flex justify-center">
            <Image src="/project2.png" alt="Screenshot of 01 Home Component project" width={500} height={100} />
          </div>
        </a>
        <h3 className="text-black text-lg font-bold mt-4">01 Home Component</h3>
        <p className="text-left text-black mt-2">
          - Create a component folder<br />
          - Create 3 components: Header, Footer & Hero<br />
          - Style with custom CSS<br />
          - Use components on home, about, and contact pages
        </p>
        <br/>
        <a href="https://github.com/M-fatimaZohra/01_homepage_component" target="_blank" className="text-black font-bold hover:underline">See Code on GitHub...</a>
      </td>


      <td className="p-4 rounded-2xl bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-400 text-center max-w-xs">
        <a href="https://02-homepage-with-tailwind.vercel.app/" target="_blank" >
          <div className="flex justify-center">
            <Image src="/project3.png" alt="Screenshot of 02 Tailwind project" width={500} height={100} />
          </div>
        </a>
        <h3 className="text-black text-lg font-bold mt-4">02 Homepage Tailwind CSS</h3>
        <p className="text-left text-black mt-2">
          - Create a minimal landing page<br />
          - Create header & footer components<br />
          - Add 2-3 sections (e.g., About Us, Portfolio)<br />
          - Style using Tailwind CSS
        </p>
        <br/>
        <a href="https://github.com/M-fatimaZohra/02_homepage_with_tailwind" target="_blank" className="text-black font-bold hover:underline">See Code on GitHub...</a>
      </td>

    </tr>
  </tbody>
</table>


       
      </div>
    </div>
  );
}

export default Service;
