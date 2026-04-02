import React from 'react'
import { AppActionButton } from '../app-action-button'
import { ArrowRight } from 'lucide-react'
import { AppJoinBanner } from '../app-join-banner'

export const InstructorBanner = () => {
  return (
        <AppJoinBanner
          variant="secondary"
          className="bg-[#FFE6D5]! rounded-none! py-6 lg:py-12"
          showPattern={false}
          title="Together, We're Raising Africa's Next Generation of Tech Builders"
          description="Every session you teach is more than a class—it's a seed of change. At Ayonaire, we're not just training coders; we're raising creators, innovators, and leaders who will build the Africa of tomorrow."
          descriptionClassName="font-medium! opacity-100!"
          image="/assets/images/instructor-smiling.svg"
          showImageOnMobile
          showSecondaryFadingWhite={false}
          cta={
            <AppActionButton className="rounded-xl! mt-3 w-fit">
              <p>Become an Instructor</p>
              <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
                <ArrowRight size={25} className="text-primary  rounded" />
              </span>
            </AppActionButton>
          }
        />
  )
}
