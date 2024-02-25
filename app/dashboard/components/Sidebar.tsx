'use client'
import React from 'react';
import SidebarItem from './SidebarItem';
import Button from '../../components/button/Button';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const links = [
  { href: '/dashboard', label: 'Home Page' },
  { href: '/dashboard/about', label: 'About Page' },
  { href: '/dashboard/contact', label: 'Contact Page' },
  { href: '/dashboard/services', label: 'Services Page' },
  { href: '/dashboard/events', label: 'Manage Events' },
  { href: '/dashboard/faq', label: 'FAQ Page' },
  { href: '/dashboard/testimonials', label: 'Testimonials Page' },
  { href: '/dashboard/profile', label: 'Change Email / Password' },
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter()
  const handleSignOut = async () => {
    try {
      // Send logout request
      const response = await fetch('/api/auth/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Include any additional headers if required
        },
        // Include any additional data in the body if required
      });

      if (response.ok) {
        // Logout successful, redirect to sign-in page
        router.push('/sign-in');
      } else {
        // Handle error scenario
        console.error('Logout failed:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred during logout:', error);
    }
  };


  return (
    <div className="flex flex-col w-64 bg-white  h-screen">
      <nav className="flex-1 p-4 overflow-y-auto">
        {links.map((link, index) => (
          <SidebarItem key={index} href={link.href} label={link.label} isActive={pathname === link.href} />
        ))}
      </nav>
      {/* Spacer to push the sign-out button to the bottom */}
      <div className="mt-auto mb-10 px-4 w-full relative bottom-20">
        <Button
          text="Sign Out"
          additionalClasses="w-full"
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
};


export default Sidebar;
