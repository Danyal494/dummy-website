"use client"
import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const Dynamic = () => {
  return (
    <div className='bg-[#f7f7f8] p-4 my-10'>

      <div className='w-full lg:w-[70%] mx-auto'>

        <div className='w-full lg:w-[70%] my-14 p-1 bg-white mx-auto'>
          <Image
            src="/images/business-blog-latest-news-image-1.jpg"
            width={800}
            height={450} // Keep this fixed for image quality
            alt="Business Blog News"
            className='mx-auto max-w-[100%] lg:max-w-[75%] my-5'
          />
          <div className='w-[90%] lg:w-[76%] mx-auto'>

            <h1 className='font-bold text-xl lg:text-2xl mt-5 mb-2'>15 Shocking Elon Musk Tweets About Stock Market</h1>
            <a href="" className='text-blue-500'>
              <span className='hover:text-black'>Leave a Comment</span> / 
              <span className='hover:text-black'> Stock Market</span> / 
              <span className='hover:text-black'> By akbarh </span>
            </a>

            <h1 className='font-bold text-xl lg:text-2xl my-5'>Cursus iaculis etiam in</h1>
            <p className='my-5'>In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet.</p>

            <p className='my-5'>Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus non arcu suspendisse ac nibh tortor, eget elementum lacus, libero sem viverra elementum.</p>

            <h1 className='font-bold text-xl lg:text-2xl my-5'>Magna enim, convallis ornare</h1>
            <p className='my-5'>Sollicitudin bibendum nam turpis non cursus eget euismod egestas sem nunc amet, tellus at duis suspendisse commodo lectus accumsan id cursus facilisis nunc eget elementum non ut elementum et facilisi dui ac viverra sollicitudin lobortis luctus sociis sed massa accumsan amet sed massa lectus id dictum morbi ullamcorper.</p>

            <p className='my-5'>Morbi ut viverra massa mattis vitae blandit ut integer non vestibulum eros, diam in in et hac mauris maecenas sed sapien fermentum et eu.</p>
          </div>
        </div>

        <div className='w-full lg:w-[70%] mx-auto'>
          <a href="" className='flex items-center hover:text-blue-500'>
            <Icon icon="material-symbols-light:arrow-back" width="1.3em" height="1.3em" /> 
            Previous post
          </a>
        </div>

        <div className='w-full lg:w-[70%] my-14 bg-white mx-auto'>
          <div className='w-[90%] lg:w-[76%] mx-auto p-1'>
            <h1 className='font-bold text-xl lg:text-2xl my-5'>Must Read</h1>

            <div className='flex flex-col md:flex-row items-center gap-6'>
              <div className='w-full md:w-1/2'>
                <Image src="/images/business-blog-latest-news-image-1.jpg"
                  width={800}
                  height={450}
                  alt="Business Blog News"
                  className='my-2'
                />
                <h1 className='font-bold text-xl lg:text-2xl'>
                  <a href="">The Incredible Stock Market Product I Can’t Live Without</a>
                </h1>
                <a href="" className='text-blue-500 my-5'>Must Read, Stock Market</a>
              </div>

              <div className='w-full md:w-1/2'>
                <Image src="/images/business-blog-latest-news-image-1.jpg"
                  width={800}
                  height={450}
                  alt="Business Blog News"
                  className='my-2'
                />
                <h1 className='font-bold text-xl lg:text-2xl'>
                  <a href="">The Incredible Stock Market Product I Can’t Live Without</a>
                </h1>
                <a href="" className='text-blue-500'>Must Read, Stock Market</a>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-[70%] my-14 p-1 bg-white mx-auto'>
          <div className='w-[90%] lg:w-[76%] mx-auto'>

            <h1 className='font-semibold text-xl lg:text-2xl mt-5 mb-1'>Leave a comment</h1>
            <p className='mb-10'>Your email address will not be published. Required fields are marked *</p>

            <textarea className='border-2 mb-5 w-full lg:w-[700px] h-[250px]' />
<div className='max-sm:flex'>

            <div className='flex  gap-4'>
              <div className='flex flex-wrap gap-3'>
                <input className='border-2 w-full lg:w-52 h-11' type="text" />
                <input className='border-2 w-full lg:w-52 h-11' type="email" />
                <input className='border-2 w-full lg:w-52 h-11' type="text" />
              </div>

            </div>
              <div className='flex flex-wrap m-2 items-center gap-4'>
                <input type="checkbox" />
                <p>Save my name, email, and website in this browser for the next time I comment.</p>
              </div>
</div>

            <button className='p-4 group hover:bg-black mt-5'>
              <a href="" className='font-bold group-hover:text-white'>Post Comment &gt;&gt;</a>
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Dynamic
