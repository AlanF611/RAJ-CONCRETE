import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Seo from './Seo';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Seo />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
