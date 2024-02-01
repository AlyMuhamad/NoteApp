'use client';

import { useRef } from 'react';
import HeroSection from './(components)/HeroSection';
import FeaturedIn from './(components)/FeaturedIn';
import Steps from './(components)/Steps';
import Pricing from './(components)/Pricing';
import CTA from './(components)/CTA';
import Footer from './(components)/Footer';

export default function Home() {
  const ref = useRef<HTMLButtonElement | null>(null);
  const ref2 = useRef<HTMLButtonElement | null>(null);

  return (
    <div>
      <HeroSection scrollToSteps={ref} />
      <FeaturedIn />
      <Steps ref={ref} />
      <Pricing ref={ref2} />
      <CTA scrollToPricing={ref2} />
      <Footer />
    </div>
  );
}
