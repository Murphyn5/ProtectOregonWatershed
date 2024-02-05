"use client"
import {
  Navbar,
  NavbarBrand,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarContent,
  NavbarItem,
  Button,
  Image,
} from '@nextui-org/react';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeSwitcher } from '../../components/themeSwitcher/themeSwitcher';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "About",
    "Action",
    "Articles",
    "Events",
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (

    <Navbar 
    isBordered
    shouldHideOnScroll
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className="gap-4" as={Link} href={"/"}>
        <Image src="/POW.png" alt="logo" width={45} />
        <p className="text-xl font-bold text-inherit">Protect Oregon Watershed</p>

      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
       {menuItems.map((item, index) => (
         <NavbarItem key={index}>
          <Link color="foreground" href={`/${item.toLowerCase()}`}>
            {item}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            href="https://docs.google.com/forms/d/e/1FAIpQLScQKxSTPGQJPBmkSgDoKctd584rfbl_hixjq0HBaUIw-CyUaw/viewform"
            color="primary"
            as={Link}
            rel="noopener noreferrer"
            target="_blank"
          >
            Join
          </Button>
        </NavbarItem>

       ))
      }
      </NavbarContent>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full"
              href={`/${item.toLowerCase()}`}
              onClick={closeMenu} 
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <ThemeSwitcher />
      </NavbarMenu>
    </Navbar>
  );
}
