import React from 'react';
import { Button } from '@nextui-org/button';

// when looking at next.js docs, we are using app routing instead of page routing

export default function Home() {
  return (
    <>
      <section id='main-image'>
        <h1>[page subheading]</h1>
      </section>
      <section id='calls-to-action'>
        <div className='color-splash'>
          <h2 className='call-text'>our missision</h2>
        </div>
        <div className='color-splash'>
          <h2 className='call-text'>events</h2>
        </div>
        <div className='color-splash'>
          <h2 className='call-text'>get involved</h2>
        </div>
      </section>
      <section id='news'>
        <h2 className='main-subheading'>news</h2>
      </section>
      <section id='read-more'>
        <div className='main-button'>
          <p className='main-button-text'>read more</p>
        </div>
      </section>
      <section id='news'>
        <h2 className='main-subheading'>[mission continued]</h2>
      </section>
    </>
  );
}
