import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Image,
} from '@nextui-org/react';
import Link from 'next/link';

export default function Nav() {
  return (
    <Navbar isBordered>
      <NavbarBrand className="gap-4">
        <Image src="/POW.png" alt="logo" width={55} />
        <p className="font-bold text-inherit">Protect Oregon Watershed</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="action">
            Action
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="article">
            Articles
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="event">
            Events
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
      </NavbarContent>
    </Navbar>
  );
}
