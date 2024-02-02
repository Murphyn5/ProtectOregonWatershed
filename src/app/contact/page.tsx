import { Button, Link } from '@nextui-org/react';
export default function Footer() {
  return (
    <div className="mt-5 flex items-center flex-col">
      <p>Contact Us!</p>
      <div className="grid grid-cols-3 px-1 items-start justify-start mt-5">
        <div className="px-10">
          <h1>Email</h1>
          <p className="text-inherit">info@stop-the-spray.com</p>
          <p className="text-inherit">beavercreekstopthespray@gmail.com</p>
        </div>
        <div className="px-10">
          <h1>Address</h1>
          <p className="text-inherit">Beaver Creek Rd, Seal Rock, OR 97376</p>
        </div>
        <div className="px-10">
          <h1 className="bold ">Links</h1>
          <p className="text-inherit">Instagram , Facebook, Twitter, Youtube</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLScQKxSTPGQJPBmkSgDoKctd584rfbl_hixjq0HBaUIw-CyUaw/viewform"
          color="primary"
          as={Link}
          rel="noopener noreferrer"
        >
          Join Us
        </Button>
      </div>
    </div>
  );
}
