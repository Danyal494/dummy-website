"use client";
import Link from 'next/link';
import React from 'react';

const LatestTechnology = () => {
  return (

      <div class="container w-[80%] mx-auto">
  <div className="flex items-center justify-between mt-8">
      <h1 className="text-4xl font-bold  mb-8">Technology</h1>
        <a href="#" className="text-black hover:text-blue-700 font-semibold">View All →</a>
      </div>
  <div class="flex flex-wrap gap-4">
  <Link href="/DynamicPage" class="w-full relative -z-10 md:w-1/2 lg:w-[49.333333%]">

        <img src="/images/business-blog-latest-technology (1).jpg" alt="This Will Fundamentally Change the Way You Look at Technology" class="w-full rounded-lg"/>
        <div class="p-4   absolute bottom-4">
        <p className='text-sm text-white'>Technology</p>
          <h3 class="text-4xl font-bold pb-2 text-white">This Will Fundamentally Change the Way You Look at Technology</h3>
          <p class="text-white text-sm">akbarh June 28, 2021</p>
        </div>

    </Link>
    <Link href="/DynamicPage" class="w-full relative -z-10 md:w-1/2 lg:w-[49.333333%]">
  
        <img src="/images/business-blog-latest-technology.jpg" alt="Technology Changed My Life. Here's My Story" class="w-full rounded-lg"/>
        <div class="p-4   absolute bottom-4">
          <p className='text-sm text-white'>Technology</p>
          <h3 class="text-4xl font-bold pb-2 text-white">Technology Changed My Life. Here's My Story</h3>
          <p class="text-white text-sm">akbarh June 28, 2021</p>
        </div>
    
    </Link>
  </div>
 
</div>
 );
};

export default LatestTechnology;




