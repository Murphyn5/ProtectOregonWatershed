'use client';
import { Button } from '@nextui-org/react';

import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Diversity1Icon from '@mui/icons-material/Diversity1';


export default function Footer() {
  return (
    <div className=" mb-5 border-t-[1px] flex items-center flex-col bg-white">
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 px-1 items-start justify-start">
        <div className="flex items-center justify-center">
          © 2024 Protect Oregon Watershed. All Rights Reserved.
        </div>
        <div className="flex items-center justify-center">
          <Link href="/attribution" >Special Thanks <Diversity1Icon/> </Link>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link href="https://www.facebook.com/groups/1995140274187439" rel="noopener noreferrer"
        target="_blank" ><FacebookIcon/></Link>
        {/* <Link href="/attribution" rel="noopener noreferrer"
        target="_blank" ><YouTubeIcon/></Link> */}
        <Link href="https://www.instagram.com/stopthespray/" rel="noopener noreferrer"
        target="_blank" ><InstagramIcon/></Link>
        </div>
      </div>
    </div>
  );
}
