import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import DreamSection from './DreamSection'
import WhatYoullDiscover from './WhatYouWillDiscover'
import AICareerPaths from './AiCareerPaths'
import LiveSessionDetails from './LiveSessionDetails'
import { Footer } from '@/components/layout/footer'
const Optin = () => {
    return (

        <main className=''>
            <div>
                <Navbar />
                <Hero />
                <DreamSection/>
                <WhatYoullDiscover/>
                <AICareerPaths/>
                <LiveSessionDetails/>
                <Footer/>
            </div>
        </main>
    )
}

export default Optin
