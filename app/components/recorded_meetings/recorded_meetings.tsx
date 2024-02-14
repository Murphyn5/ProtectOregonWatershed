import React, { useEffect, useRef, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Tooltip,
} from '@nextui-org/react';
import Image from 'next/image';

interface Meetings {
  id: number;
  title: string;
  meeting_date: string;
  link: string;
  description: string;
  images: string[];
}

interface MeetingsProps {
  meeting: Meetings;
}


const Recorded_Meetings: React.FC<MeetingsProps> = ({ meeting }) => {

  const [currentImg, setCurrentImg] = useState(0)
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
  const carouselRef = useRef(null)

  // useEffect to get the initial carousel size
  useEffect(() => {
    let elem = carouselRef.current as unknown as HTMLDivElement
    let { width, height } = elem.getBoundingClientRect()
    if (carouselRef.current) {
      setCarouselSize({
        width,
        height,
      })
    }
  }, [])

  const LeftArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"  // Adjust the width and height
    >
      <path d="M19 12H5M12 19l-7-7 7-7"/>
    </svg>
  );

  const RightArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"  // Adjust the width and height
    >
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );

  return (

    <Tooltip
      content="click to explore more"
      placement="top-end"
      className="text-persianGreen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          {/* Carousel container */}
          <div className='w-80 h-80 m-auto rounded-md overflow-hidden relative'>
            {/* Image container */}
            <div
              ref={carouselRef}
              style={{
                left: -currentImg * carouselSize.width
              }}
              className='w-full h-full absolute flex transition-all duration-300'>
              {/* Map through meeting.images to render images */}
              {meeting.images.map((image, index) => (
                <div key={index} className='relative shrink-0 w-full h-full'>
                  <Image
                    className='pointer-events-none'
                    alt={`carousel-image-${index}`}
                    style={{ objectFit: 'cover' }}
                    fill
                    src={image.url}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className='flex justify-center mt-3'>
            <button
              disabled={currentImg === 0}
              onClick={() => setCurrentImg(prev => prev - 1)}
              className={`border px-4 py-2 font-bold ${currentImg === 0 && 'opacity-50'}`}
            >
              <LeftArrowIcon />
            </button>
            <button
              disabled={currentImg === meeting.images.length - 1}
              onClick={() => setCurrentImg(prev => prev + 1)}
              className={`border px-4 py-2 font-bold ${currentImg === meeting.images.length - 1 && 'opacity-50'}`}
            >
              <RightArrowIcon />
            </button>
          </div>
        </div>
        <Link isExternal href={meeting.link} key={meeting.id}>
          <div className="bg-white shadow-md rounded-lg max-w-1/2 flex flex-col justify-center items-center">
            <div className="text-3xl font-bold">{meeting.title}</div>
            <p className="text-gray-700 text-lg p-10">
              {meeting.description}
            </p>
          </div>
        </Link>
      </div>

    </Tooltip>

  );
};

export default Recorded_Meetings;
