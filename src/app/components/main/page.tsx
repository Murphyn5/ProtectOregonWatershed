import mainBackground from "./image/main.jpg";

const Main = () => {
  const imageStyle = {
    // backgroundImage: `url(${mainBackground})`
    height: "48rem"
  };

  const callText = "text-white text-5xl font-bold my-8 p-0";
  const subHeading = "text-darkText text-7xl font-semibold m-0 p-0";
  const callSplash = "flex auto w-full justify-center"
  const whiteParagraph = "text-white text-xl"
  const readMore = "bg-midnightGreen px-3 py-1.5"

  return (
    <>
      <section className="relative flex justify-center w-screen" style={imageStyle}>
        <img src={"/main.jpg"} alt="main-image" className="w-screen object-cover" />
        <h1 className="text-white absolute p-5 text-7xl font-bold bottom-20 left-1/2 transform -translate-x-1/2 w-full flex justify-center"
        >[page subheading]</h1>
      </section>
      <section className="flex justify-evenly w-screen">
        <div className={`${callSplash} bg-midnightGreen`}>
          <h2 className={callText}>our mission</h2>
        </div>
        <div className={`${callSplash} bg-persianGreen`}>
          <h2 className={callText}>events</h2>
        </div>
        <div className={`${callSplash} bg-lightGreen`}>
          <h2 className={callText}>get involved</h2>
        </div>
      </section>
      <section className="flex justify-center w-screen">
        <h2 className={`${subHeading}`}>news</h2>
      </section>
      <section className="flex justify-center w-screen">
        <button className={`${readMore} ${whiteParagraph}`}>read more</button>
      </section>
      <section className="flex justify-center w-screen bg-persianGreen">
        <h2 className="text-white text-xl">[mission continued]</h2>
      </section>
      <section className="flex justify-center w-screen">
        <h2 className="main-subheading">upcoming events</h2>
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
