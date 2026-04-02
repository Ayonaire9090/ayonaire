import React from 'react'
import { AppHeading } from '../app-heading'
import { instructorWhyTeachReasons } from '@/constants'
import { AppInstructorWhyTeachCard } from '../app-instructor-why-teach-card'

export const InstructorWhyTeach = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 container section-spacing'>
        <AppHeading
            title='Why Teach With Ayonaire?'
            headingLevel='h2'
            description="Why Teach with Ayonaire? Join a community of passionate educators transforming Africa's tech landscape"
            className="text-center w-full lg:max-w-3xl text-[27px] lg:text-[44px] leading-tight! pt-4"
            descriptionClassName='text-center text-[#141414] w-full lg:max-w-xl mx-auto'
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {instructorWhyTeachReasons.map((reason) => (
                <AppInstructorWhyTeachCard key={reason.title} title={reason.title} description={reason.description} icon={reason.icon} />
            ))}
        </div>
    </div>
  )
}