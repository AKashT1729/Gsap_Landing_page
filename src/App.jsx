import React, { Suspense, lazy } from 'react';
import { ScrollTrigger,SplitText } from 'gsap/all';
import gsap from 'gsap';

// lazy-load components
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Cocktails = lazy(() => import('./components/Cocktails'));
const About = lazy(() => import('./components/About'));
const Art = lazy(() => import('./components/Art'));
const Menu = lazy(() => import('./components/Menu'));
const Contact = lazy(() => import('./components/Contact'));

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
   <>
   <main>
    <Suspense fallback={<div className="p-8 text-center">Loading…</div>}>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      <Art/>
      <Menu/>
      <Contact/>
    </Suspense>
   </main>
   </>
  )
}

export default App