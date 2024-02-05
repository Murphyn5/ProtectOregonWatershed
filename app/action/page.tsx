'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import ToWriteCard from '../components/toWriteCard/toWriteCard';
import MediaCard from '../components/mediaCard/mediaCard';
import  {WriteList, SampleLetters, MediaList}  from './actionData.js';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
// import Test from '../components/test_component/test';
export default function Action() {
  return (
    <div className="">

      <div className="pb-5 w-full h-50 flex flex-col items-center justify-center gap-2 bg-persianGreen">
        <h1 className="py-3 text-6xl text-white">Take Action!</h1>
      </div>
      <div className="relative w-full h-[450px]"> {/* Set the desired height */}
        <Image
          src="/event1.jpeg"
          alt="Our Vision"
          layout="fill"
          objectFit="cover" // or 'contain' based on your need
        />
      </div>


      <div className='w-full py-10 flex flex-col items-center justify-center'>
        <div className='w-full'>
          <p className="text-center max-w-1/2">
            Now is the time to come together and see what we can do to change the
            current situation. This is a call to action for our entire community.
            Spraying pesticides equates to putting poisons into our water shed,
            going deep into the soil into our water table and in effect directly
            poisoning all insects and animals.{' '}
          </p>
        </div>
        <Link href="/events" className='bg-persianGreen shadow-md p-3 mt-3'>
          <p className="text-white text-xl ">See Our Events</p>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="w-full h-50 flex flex-col items-center justify-center bg-persianGreen">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScQKxSTPGQJPBmkSgDoKctd584rfbl_hixjq0HBaUIw-CyUaw/viewform" rel="noopener noreferrer"
        target="_blank" >
            <h1 className="py-8 text-4xl text-white">Join Us</h1>
          </Link>
        </div>
        <div className="w-full h-50 flex flex-col items-center justify-center bg-midnightGreen">
          <Link href="https://secure.avaaz.org/community_petitions/en/tina_kotek_governor_of_oregon_prevent_aerial_spraying_of_chemicals_in_seal_rock/" rel="noopener noreferrer"
        target="_blank" >
            <h1 className="py-8 text-4xl text-white">Petition</h1>
          </Link>
        </div>
        <div className="w-full h-50 flex flex-col items-center justify-center bg-persianGreen">
          <Link href="https://www.gofundme.com/f/protect-beaver-creek-watershed?utm_campaign=m_pd+share-sheet&utm_content=undefined&utm_medium=copy_link_all&utm_source=customer&utm_term=undefined" rel="noopener noreferrer"
        target="_blank" >
            <h1 className="py-8 text-4xl text-white">Donate</h1>
          </Link>
        </div>
      </div>

      <div className='w-full py-10 flex flex-col items-center justify-center'>
        <div className='text-4xl font-semibold text-grey-600 mb-2'>Writing Counts! Let Your Voice Be Heard!</div>
        <div className="grid grid-cols-1 md:grid-cols-2">

          {WriteList.map((item: any, index) => (
            <ToWriteCard
              key={index}
              name={item.name}
              email={item.email}
              website={item.website}
            />
          ))}
        </div>
      </div>

      <div className='w-full py-10 flex flex-col items-center justify-center'>
        <div className='text-4xl font-semibold text-grey-600 mb-2' > For Reference: </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {SampleLetters.map((item: any, index) => (
            <div key={index} className='flex flex-col justify-center items-center'>
              <Link href={item.link} rel="noopener noreferrer" target="_blank" className='border'>
                <Image src={item.src} alt={'not found'} width={400} height={600} />
              </Link>
              {/* <div>{item.name}</div> */}
            </div>
          ))}
        </div>
      </div>

      <div className='w-full py-10 flex flex-col items-center justify-center'>
        <div className='text-4xl font-semibold text-grey-600 mb-2' >Media Outreach:</div>
        <div className="grid grid-cols-1 md:grid-cols-2">
        {MediaList.map((mediaItem, index) => (
          <MediaCard
            key={index}
            name={mediaItem.name}
            contactName={mediaItem.contactName}
            email={mediaItem.email}
            phone={mediaItem.phone}
            website={mediaItem.website}
            address={mediaItem.address}
            mediaType={mediaItem.mediaType}
          />
        ))}
        </div>
      </div>
    </div>
  );
}
