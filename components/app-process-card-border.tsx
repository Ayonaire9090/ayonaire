import Image from 'next/image';
import React from 'react'

interface AppProcessCardBorderProps {
    borderDirection: "top" | "bottom";
}

export const AppProcessCardBorder = ({ borderDirection }: AppProcessCardBorderProps) => {
    return (
        <div>
            {borderDirection === "top" ? (
                <div className='flex items-center justify-center'>
                    <Image
                        src="/assets/icons/process-card-border-t.svg"
                        alt=""
                        width={800}
                        height={800}
                        className="w-full h-auto"
                    />
                    {/* The long Pin  up*/}
                    <Image
                        src="/assets/icons/long-pin-up.svg"
                        alt=""
                        width={13}
                        height={70}
                        className="w-[7px] h-[35px] lg:w-[13px] lg:h-[70px]"
                    />
                </div>
            ) : (
                <div className='flex items-center justify-center'>
                    <Image
                        src="/assets/icons/process-card-border-b.svg"
                        alt=""
                        width={800}
                        height={800}
                        className="w-full h-auto"
                    />
                    {/* The long Pin  down*/}
                    <Image
                        src="/assets/icons/long-pin-down.svg"
                        alt=""
                        width={13}
                        height={70}
                        className="w-[7px] h-[35px] lg:w-[13px] lg:h-[70px]"
                    />
                </div>
            )}
        </div>
    )
}