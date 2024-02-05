import MainArticleList from "../mainArticleList/page";
import MainEventsList from "../mainEventsList/page";
import Link from "next/link";
import Image from "next/image";

const Main = () => {
  const defaultSection = 'flex justify-center w-full';
  const subHeading = 'text-altText text-7xl font-semibold m-0 p-0 mb-5';
  const whiteParagraph = 'text-white text-xl';
  const darkParagraph = 'text-altText text-xl font-semibold';
  const callText = 'text-white text-5xl font-bold my-8 px-5 text-nowrap';
  const callSplash = 'flex w-full justify-center';
  const readMore = 'bg-splash1 px-5 py-2 mb-5';
  const newsSection = 'flex flex-col w-full items-center';

  return (
    <main className="bg-background">
      <section className="relative w-full h-96 m-0 p-0 flex items-center">
        <img
          src="/main.jpg"
          alt="main image"
          className="w-full h-full object-cover m-0 p-0"
        />
        <h1 className="absolute w-full flex justify-center text-whiteText text-nowrap text-7xl font-bold self-end bottom-12">
          Stop The Spray!
        </h1>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 mb-2">
        <div className="w-full h-50 flex flex-col items-center justify-center bg-persianGreen">
          <Link href="/action" rel="noopener noreferrer"
        target="_blank" >
            <h1 className={callText}>Our Mission</h1>
          </Link>
        </div>
        <div className="w-full h-50 flex flex-col items-center justify-center bg-midnightGreen">
          <Link href="/action" rel="noopener noreferrer"
        target="_blank" >
            <h1 className={callText}>Vision</h1>
          </Link>
        </div>
        <div className="w-full h-50 flex flex-col items-center justify-center bg-persianGreen">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScQKxSTPGQJPBmkSgDoKctd584rfbl_hixjq0HBaUIw-CyUaw/viewform" rel="noopener noreferrer"
        target="_blank" >
            <h1 className={callText}>Get Involved</h1>
          </Link>
        </div>
      </section>

      <section className={`${newsSection} bg-background overflow-x-auto`}>
        <h2 className={`${subHeading}`}>
          {/* <svg
            fill="altText"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
          >
            <path d="M8 11a3 3 0 110-6 3 3 0 010 6zm0 1a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z" />
          </svg> */}
          News</h2>
        <MainArticleList />
      </section>
      <section className={`${defaultSection} bg-background`}>
        <button className={`${readMore} ${whiteParagraph}`}>read more</button>
      </section>

      <section className={`${defaultSection} bg-splash3 py-16`}>
        <h2 className="text-white text-5xl italic">[mission continued]</h2>
      </section>

      <section className={`${newsSection} bg-background py-5`}>
        <h2 className={`${subHeading}`}>Upcoming Events</h2>
        <MainEventsList />
      </section>

      <section className="flex w-full bg-background">
        <div className="flex flex-col items-center w-2/5 bg-splash3">
          <h3 className={`${callText}`}>Join Us</h3>
          <button className={`${readMore} ${whiteParagraph}`}>Join</button>
        </div>
        <img
          src="/join.jpg"
          alt="main image"
          className="w-3/5 object-cover h-44 object-top"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 mb-2">
        <div className="">
          <h4 className={`${darkParagraph}`}>Email:</h4>
          <p className={`${darkParagraph} font-light`}>info@stop-the-spray.com</p>
          <p className={`${darkParagraph} font-light`}>beavercreekstopthespray@gmail.com</p>
        </div>
        <div className="flex flex-col w-3/5 gap-1">
          <h5 className={`${darkParagraph}`}>Adress:</h5>
          <p className={`${darkParagraph} font-light`}>Beaver Creek Rd, S. Low Rd</p>
          <p className={`${darkParagraph} font-light`}>Seal Rock, OR 97376</p>
          {/* <form className="flex flex-col items-start gap-2">
            <input id="spray-notification-input" type="email" />
            <button className={`${darkParagraph}`}>[email submit]</button>
          </form> */}
        </div>
        <div className="">
          <Image
            src="/ODFlogoLarge.png"
            alt="odf logo"
            width={100}
            height={100}
            className="h-28"
          />
        </div>
      </section>

    </main>
  );
};

export default Main;
