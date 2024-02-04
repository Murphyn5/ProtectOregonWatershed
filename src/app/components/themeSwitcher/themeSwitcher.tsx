'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@nextui-org/react';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a placeholder/loading state
  }

  return (
    <div>
      <Button onClick={() => setTheme('light')}>L</Button>
      <Button onClick={() => setTheme('dark')}>D</Button>
      {/* <Button onClick={() => setTheme('modern')}>Modern Mode</Button> */}
    </div>
  );
};
