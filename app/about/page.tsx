import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

export default function About() {
  return (
    <div className="">
      <div className="pb-3 w-full h-40 flex flex-col items-center justify-center gap-2 bg-persianGreen">
        <h1 className="py-3 text-6xl text-white">About</h1>
      </div>
      <div className='w-full py-10 flex flex-col items-center justify-center'>
        <p className="text-center">
          The Beaver Creek watershed is being threatened by a toxic herbicide spray over a clear cut near vital water sources. Please help us stop this crisis!
        </p>
        <Link href="/action" className='bg-persianGreen shadow-md p-3 mt-3'>
          <p className="text-white text-xl ">We Need Your Support!</p>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="max-w-1/2">
          <Image src="/mission.jpeg" alt="Our Vision" width={1000} height={300} />
        </div>
        <div className="bg-white shadow-md rounded-lg max-w-1/2 flex flex-col justify-center items-center">
          <div className="text-5xl font-semibold text-grey-600 mb-2">Our Mission</div>
          <p className="text-gray-700 text-lg p-10">
            EMPOWERING THE COMMUNITY TOGETHER WE CAN MAKE A DIFFERENCE!
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white shadow-md rounded-lg max-w-1/2 flex flex-col justify-center items-center">
          <div className="text-5xl font-semibold text-grey-600 mb-2">Our Vision</div>
          <p className="text-gray-700 text-lg p-10">
            CARING FOR OUR WORLD! We believe that everyone deserves to live in a clean, safe & sustainable environment for the present and the next generations to come. Protect endangered species, Protect the wilderness, Advocate for clean beaches and riversides, Keep our air and water clean, Ensure a clean energy future, Curb climate change, Keep the pressure on politicians and corporations to ensure safe and healthy communities.
          </p>
        </div>
        <div className="max-w-1/2">
          <Image src="/vision.jpeg" alt="Our Vision" width={1000} height={300} />
        </div>
      </div>



      <div className="mt-12 flex justify-center items-center">
        <div className="text-4xl font-semibold text-grey-900 mb-2">PHOTOS!</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* {photos.map((photo) => (
            <img key={photo.id} src={photo.src} alt={photo.alt} className="w-full h-64 object-cover rounded-md" />
          ))} */}
        </div>
      </div>
    </div>
  );
}
