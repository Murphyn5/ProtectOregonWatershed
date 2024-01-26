import React from 'react'

const Main = () => {
  return (
    <>
      <section className="flex justify-center w-screen">
        <h1 className="p-5">[page subheading]</h1>
      </section>
      <section className="flex justify-evenly w-screen">
        <div className="flex auto">
          <h2 className="call-text">our missision</h2>
        </div>
        <div className="flex auto">
          <h2 className="call-text">events</h2>
        </div>
        <div className="flex auto">
          <h2 className="call-text">get involved</h2>
        </div>
      </section>
      <section className="flex justify-center w-screen">
        <h2 className="main-subheading">news</h2>
      </section>
      <section className="flex justify-center w-screen">
        <button>read more</button>
      </section>
      <section className="flex justify-center w-screen">
        <h2 className="main-subheading">[mission continued]</h2>
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
