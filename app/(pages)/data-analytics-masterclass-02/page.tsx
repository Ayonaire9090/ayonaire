

import React from 'react';
import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import Hero from './Hero';
import Testimonials from './Testimonials';
import WhatYoullLearn from './WhatYoullLearn';
import WhoIsTeaching from './WhoIsTeaching';
import WhoThisIsFor from './WhoThisIsFor';
import RegisterBand from './RegisterBand';
import HiringGameChanged from './HiringGameChanged';
import FinalCTA from './FinalCTA';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = generateSEO({
  title: 'Free Data Analytics Masterclass 2026 | Ayonaire Academy',
  description:
    'Join a Senior Data Analyst, a Hiring Executive, and a Remote Data Analyst as they reveal the hiring standards, career roadmap, and mistakes that determine who gets Data Analytics jobs in 2026.',
  keywords:
    'data analytics masterclass, data analyst hiring, AI-powered data analytics, remote data analyst jobs, data analytics career 2026',
  canonical: '/data-analytics-masterclass-02',
});

const DataAnalyticsMasterclass = () => {
  return (
    <main>
      <Hero />
      <WhatYoullLearn />
      <WhoThisIsFor />
      <Testimonials />
      <WhoIsTeaching />
      <RegisterBand />
      <HiringGameChanged />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default DataAnalyticsMasterclass;
