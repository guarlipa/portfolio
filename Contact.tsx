import React from 'react';
import Image from 'next/image';
import profileImage from '../Components/images/Mexico.jpg';


const Contact = () => {
  return (
    <>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-10">
      <Image
            src={profileImage}
            width={500}
            height={500}
            alt="Foto del autor"
            className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto m-0'
        />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
        </div>
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4 me-20'>
          <blockquote>
            <h1 className='text-5xl font-semibold'>Who am I?</h1>
            <p className='text-3xl text-gray-700 '>
              Hey there, I'm Guarli Jose Pernett Alvarez, a 21-year-old mechatronic engineering student at Agustiniana University in Bogota, Colombia. 
              I'm into a bunch of things like soccer, robotics, programming, music, art, and video games. I really enjoy learning new stuff, 
              and I'm always looking to expand my interests. Spanish is my first language, and I'm at an intermediate level in English.
            </p>
            <button className='px-2 py-4 bg-blue-200 rounded-lg font-bold mt-5'>
            More about me
            </button> 
          </blockquote>
        </div>
      </figure>
    <form className="font-bold">
        <div>
            <h2 className="font-bold text-xl text-white m-2">Contact me:</h2>
        </div>
        <div className='mb-2'>
            <input
                type="text"
                placeholder='Your name'
                name='name'
                className='p-6 w-200 placeholder-blue-400 rounded-lg' />
          </div>
        <div className='mb-2'>
            <input type= "text" 
                placeholder='Your email'
                name='email'
                className='p-6 w-200 placeholder-blue-300 rounded-lg'
            />
        </div>
        <div className='mb-2'>
            <input type= "text" 
                placeholder='Your message'
                name='message'
                className='p-6 w-200 placeholder-blue-300 rounded-lg'            
            />
        </div>
        <button className='px-2 py-4 bg-blue-200 rounded-lg font-bold'>
            Send message
        </button>   
    </form>
    {/* <div>
        Contact me soon. . .
    </div> */}
    </>
  )
}

export default Contact
