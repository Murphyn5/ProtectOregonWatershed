import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className=" mb-5 border-t-[1px] flex items-center flex-col bg-white">
      <div className="mt-10 grid grid-cols-3 px-1 items-start justify-start">
        <div className="flex items-center justify-center">
          © 2024 Protect Oregon Watershed. All Rights Reserved.
        </div>
        <div className="flex items-center justify-center">
          <Link href="/attribution">Special Thanks ❤️</Link>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://www.facebook.com/groups/1995140274187439"
            rel="noopener noreferrer"
            target="_blank"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/stopthespray/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
}
