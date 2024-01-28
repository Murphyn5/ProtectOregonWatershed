const Main = () => {
  // const imageStyle = {
  //   // backgroundImage: `url(${mainBackground})`
  //   height: "48rem"
  // };

  const defaultSection = "flex justify-center w-screen"
  const subHeading = "text-darkText text-7xl font-semibold m-0 p-0 mb-5";
  const whiteParagraph = "text-white text-xl"
  const callText = "text-white text-5xl font-bold my-8 p-0";
  const callSplash = "flex auto w-full justify-center box-border"
  const readMore = "bg-midnightGreen px-5 py-2 mb-5"

  return (
    <>
      <section className="relative w-screen h-96 m-0 p-0 flex items-center">
        <img
          src="/main.jpg"
          alt="main image"
          className="w-full h-full object-cover fixed -z-10 m-0 p-0"
        />
        <h1 className="w-full flex justify-center text-white text-nowrap relative text-7xl font-bold self-end bottom-12">
          [page subheading]
        </h1>
      </section>
      <section className="flex justify-evenly w-screen">
        <div className={`${callSplash} bg-midnightGreen`}>
          <h2 className={callText}>our mission</h2>
        </div>
        <div className={`${callSplash} bg-lightGreen`}>
          <h2 className={callText}>events</h2>
        </div>
        <div className={`${callSplash} bg-persianGreen`}>
          <h2 className={callText}>get involved</h2>
        </div>
      </section>
      <section className={`${defaultSection} bg-white`}>
        <h2 className={`${subHeading}`}>news</h2>
      </section>
      <section className={`${defaultSection} bg-white`}>
        <button className={`${readMore} ${whiteParagraph}`}>read more</button>
      </section>
      <section className={`${defaultSection} bg-persianGreen py-16`}>
        <h2 className="text-white text-5xl italic">[mission continued]</h2>
      </section>
      <section className={`${defaultSection} bg-white py-5`}>
        <h2 className={`${subHeading}`}>upcoming events</h2>
      </section>
      <section className="flex w-screen">
        <div className="flex flex-col items-center w-2/5">
          <h3>join us</h3>
          <button>[join button]</button>
        </div>
        <div className="flex justify-center w-3/5">
          <h3>[join image]</h3>
        </div>
      </section>
      <section className="flex w-screen">
        <div className="flex items-center w-2/5">
          <h4>[site contacts]</h4>
        </div>
        <div className="flex items-center w-3/5">
          <div className="flex flex-col w-3/5">
            <h5>[spray notification signup]</h5>
            <form className="flex flex-col items-start">
              <input id="spray-notification-input" type="email" />
              <button className="main-button">[email submit]</button>
            </form>
          </div>
          <div className="additional">
            <h5>[additional links]</h5>
          </div>
        </div>
      </section>
      <section>
        <h6>[footer]</h6>
      </section>
    </>
  )
}

export default Main
