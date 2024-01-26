import React from 'react';
import { Button } from '@nextui-org/button';
import Main from './components/main/page';

// when looking at next.js docs, we are using app routing instead of page routing

export default function Home() {
  return (
    <Main />
    // <>
    //   <section id="main-image">
    //     <h1>[page subheading]</h1>
    //   </section>
    //   <section id="calls-to-action">
    //     <div className="call-splash">
    //       <h2 className="call-text">our missision</h2>
    //     </div>
    //     <div className="call-splash">
    //       <h2 className="call-text">events</h2>
    //     </div>
    //     <div className="call-splash">
    //       <h2 className="call-text">get involved</h2>
    //     </div>
    //   </section>
    //   <section id="news">
    //     <h2 className="main-subheading">news</h2>
    //   </section>
    //   <section id="read-more">
    //     <div className="main-button">
    //       <p className="main-button-text">read more</p>
    //     </div>
    //   </section>
    //   <section id="news">
    //     <h2 className="main-subheading">[mission continued]</h2>
    //   </section>
    //   <section id="news">
    //     <h2 className="main-subheading">upcoming events</h2>
    //   </section>
    //   <section id="join">
    //     <div id="join-splash">
    //       <h3>join us</h3>
    //       <button className="main-button">[join button]</button>
    //     </div>
    //     <div className="join-image">
    //       <h3>[join image]</h3>
    //     </div>
    //   </section>
    //   <section id="main-info">
    //     <div id="main-contacts">
    //       <h4>[site contacts]</h4>
    //     </div>
    //     <div className="spray-notification">
    //       <h5>[spray notification signup]</h5>
    //       <form>
    //         <input id="spray-notification-input" type="email" />
    //         <button className="main-button">[email submit]</button>
    //       </form>
    //     </div>
    //     <div className="additional">
    //       <h5>[additional links]</h5>
    //     </div>
    //   </section>
    //   <section>
    //     <h6>[footer]</h6>
    //   </section>
    // </>
  );
}
