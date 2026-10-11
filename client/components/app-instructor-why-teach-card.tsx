import { LucideIcon } from 'lucide-react';
import React from 'react'
interface AppInstructorWhyTeachCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}
export const AppInstructorWhyTeachCard = ({
    icon: Icon,
    title, 
    description
}: AppInstructorWhyTeachCardProps) => {
  return (
    <div className='p-5 bg-white hover:bg-[#FFF3EA] border border-gray-200 hover:border-primary rounded-[15.72px] transition-all ease-in-out duration-300'>
        <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center bg-primary p-2 rounded-md w-fit">
                <Icon className='text-white' />
            </div>
            <h3 className='font-bold text-lg lg:text-xl'>{title}</h3>
            <p className='text-base text-gray-500'>{description}</p>
        </div>
        
    </div>
  )
}
