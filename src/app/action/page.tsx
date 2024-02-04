'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
// import Test from '../components/test_component/test';
export default function Action() {
  return (
    <div style={{ padding: '20px' }}>
      <Button
        href="https://docs.google.com/forms/d/e/1FAIpQLScQKxSTPGQJPBmkSgDoKctd584rfbl_hixjq0HBaUIw-CyUaw/viewform"
        color="primary"
        as={Link}
        rel="noopener noreferrer"
        target="_blank"
      >
        Join
      </Button>
      <Button
        href="https://secure.avaaz.org/community_petitions/en/tina_kotek_governor_of_oregon_prevent_aerial_spraying_of_chemicals_in_seal_rock/"
        color="primary"
        as={Link}
        rel="noopener noreferrer"
        target="_blank"
      >
        Petition
      </Button>
      <Button
        href="https://www.gofundme.com/f/protect-beaver-creek-watershed?utm_campaign=m_pd+share-sheet&utm_content=undefined&utm_medium=copy_link_all&utm_source=customer&utm_term=undefined"
        color="primary"
        as={Link}
        rel="noopener noreferrer"
        target="_blank"
      >
        Go Fund Me
      </Button>
      <div>
        Now is the time to come together and see what we can do to change the
        current situation. This is a call to action for our entire community.
        Spraying pesticides equates to putting poisons into our water shed,
        going deep into the soil into our water table and in effect directly
        poisoning all insects and animals.{' '}
      </div>
      <div>Writing Counts! Let Your Voice Be Heard!</div>
      <div> Write list Spread </div>
      <div> Sample letter Spread </div>

      <div>MediaCard</div>
      {/* <div>make automatic mail chain</div> */}
    </div>
  );
}
