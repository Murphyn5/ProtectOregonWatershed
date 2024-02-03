const Main = () => {
  const defaultSection = 'flex justify-center w-full';
  const subHeading = 'text-altText text-7xl font-semibold m-0 p-0 mb-5';
  const whiteParagraph = 'text-white text-xl';
  const darkParagraph = 'text-altText text-xl font-semibold';
  const callText = 'text-white text-5xl font-bold my-8 px-5 text-nowrap';
  const callSplash = 'flex w-full justify-center';
  const readMore = 'bg-splash1 px-5 py-2 mb-5';

  return (
    <main className="relative -z-20 bg-background">
      <section className="relative w-full h-96 m-0 p-0 flex items-center">
        <img
          src="/main.jpg"
          alt="main image"
          className="w-full h-full object-cover fixed -z-10 m-0 p-0"
        />
        <h1 className="w-full flex justify-center text-whiteText text-nowrap relative text-7xl font-bold self-end bottom-12">
          [page subheading]
        </h1>
      </section>

      <section className="flex w-full">
        <div className={`${callSplash} bg-splash1`}>
          <h2 className={callText}>our mission</h2>
        </div>
        <div className={`${callSplash} bg-splash2`}>
          <h2 className={callText}>events</h2>
        </div>
        <div className={`${callSplash} bg-splash3`}>
          <h2 className={callText}>get involved</h2>
        </div>
      </section>

      <section className={`${defaultSection} bg-background min-w-full overflow-x-auto`}>
        <h2 className={`${subHeading}`}>news</h2>
      </section>
      <section className={`${defaultSection} bg-background`}>
        <button className={`${readMore} ${whiteParagraph}`}>read more</button>
      </section>

      <section className={`${defaultSection} bg-splash3 py-16`}>
        <h2 className="text-white text-5xl italic">[mission continued]</h2>
      </section>

      <section className={`${defaultSection} bg-background py-5`}>
        <h2 className={`${subHeading}`}>upcoming events</h2>
      </section>

      <section className="flex w-full bg-background">
        <div className="flex flex-col items-center w-2/5 bg-splash3">
          <h3 className={`${callText}`}>join us</h3>
          <button className={`${readMore} ${whiteParagraph}`}>
            [join button]
          </button>
        </div>
        <img
          src="/join.jpg"
          alt="main image"
          className="w-3/5 object-cover h-44 object-top"
        />
      </section>

      <section className="flex w-full p-5 bg-background">
        <div className="flex items-start w-2/5">
          <h4 className={`${darkParagraph}`}>[site contacts]</h4>
        </div>
        <div className="flex items-start w-3/5">
          <div className="flex flex-col w-3/5 gap-4">
            <h5 className={`${darkParagraph}`}>[spray notification signup]</h5>
            <form className="flex flex-col items-start gap-2">
              <input id="spray-notification-input" type="email" />
              <button className={`${darkParagraph}`}>[email submit]</button>
            </form>
          </div>
          <div className="additional">
            <h5 className={`${darkParagraph}`}>[additional links]</h5>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Main;
