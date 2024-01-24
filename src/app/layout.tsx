import '../styles/globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './providers';
import { ThemeSwitcher } from './components/themeSwitcher/themeSwitcher';
import Nav from './components/nav/nav';

export const metadata: Metadata = {
  title: 'Protect Oregon Watersheds',
  description: 'Generated by create next app',
};

// when looking at next.js docs, we are using app routing instead of page routing
// custom component styling? : https://nextui.org/docs/customization/custom-variants

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <header >
            <Nav />
          </header>
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  );
}
