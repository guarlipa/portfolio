import React from 'react';
import Image from 'next/image';
import profileImage from '../Components/images/Profilegu.jpg';

const Navbar = () => {
  return (
    <div className='items-center justify-end mb-2'>
      <div className='items-center flex flex-col'>
        <div>
          <Image
            src={profileImage}
            width={500}
            height={500}
            alt="Foto del autor"
            className='rounded-full'
          />
        </div>
        <div className='text-5xl italic text-white ml-4 mb-2'>Welcome to my official page</div>
      </div>
    </div>
  );
};

export default Navbar;
