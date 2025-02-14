import React from "react";
import Image from "next/image";
import { Project, projects } from "./projects";


function Service() {
  return (
    <div className="font-mono h-auto px-[120px] md:px-[80px] py-[150px]">
      <h1 className="md:text-6xl lg:text-6xl text-3xl lg:text-center  lg:p-5 p-2 pb-0">My Projects</h1>
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 '>
  {projects.map((project:Project, i:number) => (
 <div
 key={i}
 className="p-4 rounded-2xl flex flex-col gap-2 items-start justify-between bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-400 "
>
 <a href={project.liveLink} target="_blank">
   <div className="flex justify-center w-full">
     <Image src={project.imageSrc} alt={project.imageAlt} width={500} height={100} />
   </div>
 </a>
 <h3 className="text-black lg:text-lg md:text-base text-sm font-bold mt-4">
   {project.title}
 </h3>
 <p className="text-left text-black lg:text-base md:text-sm text-xs mt-2 line-clamp-3">
   {project.description}
 </p>
 <br />
 <a
   href={project.githubLink}
   target="_blank"
   className="lg:text-base md:text-sm text-xs text-black font-bold hover:underline"
 >
   See Code on GitHub...
 </a>
 {project.docs && (
   <a
     href={project.docs}
     target="_blank"
     className="lg:text-base md:text-sm text-xs text-black font-bold hover:underline"
   >
     See Documentation...
   </a>
 )}
</div>
  ))}
 
 
</div>
       


       
      </div>
    </div>
  );
}

export default Service;
