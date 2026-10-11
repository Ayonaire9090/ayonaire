"use client"
import React from 'react'

import Hero from '@/components/Hero'
import DreamSection from '@/components/DreamSection'
import MasterclassSection from '@/components/MasterClassSection'
import WhatYoullDiscover from '@/components/WhatYoullDiscover'
import { Footer } from '@/components/layout/footer'
import Navbar from '@/components/NavBar'
import LiveSessionDetails from '@/components/LiveSessionDetails'
const Home = () => {
  return (
    <main className='bg-[#ffffff] '>
      <Navbar />
      <Hero />
      <DreamSection />
      <MasterclassSection />
      <WhatYoullDiscover />
      <LiveSessionDetails/>
     <div className="bg-[#ffffff]">
  <Footer />
</div>

    </main>
  )
}

export default Home
