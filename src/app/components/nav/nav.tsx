import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import { ThemeSwitcher } from '../themeSwitcher/themeSwitcher';

export default function Nav() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/" >
          <p className="font-bold text-inherit">Protect Oregon Watershed</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" href="about" aria-current="page">
            about
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="secondary" href="action" aria-current="page">
            action
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="secondary" href="events" aria-current="page">
            events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            link 3
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
