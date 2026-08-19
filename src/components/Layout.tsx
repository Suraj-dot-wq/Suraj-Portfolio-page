import { type ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <AnimatedBackground />
      <Navbar />
      <main className="flex-1">{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
}
