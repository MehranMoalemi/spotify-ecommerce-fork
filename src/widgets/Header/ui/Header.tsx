'use client'
import { LogoSvg } from '@/src/shared/Icons/Logo'
import Link from 'next/link'
import React, { useState } from 'react'
import Light1 from '../Icons/Light1'
import Light2 from '../Icons/Light2'
import Light3 from '../Icons/Light3'

export const Header = () => {
    const [activeLight, setActiveLight] = useState<number | null>(null);

    const handleMouseEnter = (index: number) => {
        setActiveLight(index);
    };

    const handleMouseLeave = () => {
        setActiveLight(null);
    };

    return (
        <header className='relative flex justify-between w-full py-8 max-w-[80rem] lg:px-24 mx-auto'>
            <nav>
                <ul className='flex gap-6'>
                    <Link href={'#'}>
                        <li 
                            onMouseEnter={() => handleMouseEnter(1)}
                            onMouseLeave={handleMouseLeave}
                            className='pb-2 transition-all duration-500 border-b border-transparent hover:text-khaki hover:border-khaki'
                        >
                            صفحه اصلی
                        </li>
                    </Link>
                    <Link href={'#'}>
                        <li 
                            onMouseEnter={() => handleMouseEnter(2)}
                            onMouseLeave={handleMouseLeave}
                            className='pb-2 transition-all duration-500 border-b border-transparent hover:text-khaki hover:border-khaki'
                        >
                            تماس با ما
                        </li>
                    </Link>
                    <Link href={'#'}>
                        <li 
                            onMouseEnter={() => handleMouseEnter(3)}
                            onMouseLeave={handleMouseLeave}
                            className='pb-2 transition-all duration-500 border-b border-transparent hover:text-khaki hover:border-khaki'
                        >
                            خرید اشتراک
                        </li>
                    </Link>
                </ul>
            </nav>

            <Light1 className={`absolute w-[45rem] h-[28rem] top-16 right-0 transition-opacity transform ${
                activeLight === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 '
            }`} />

            <Light2 className={`absolute w-[45rem] h-[28rem] top-16 right-14 transition-opacity transform ${
                activeLight === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 '
            }`} />

            <Light3 className={`absolute w-[45rem] h-[26.4rem] top-16 right-16 transition-opacity transform ${
                activeLight === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 '
            }`} />

            <LogoSvg />
        </header>
    )
}
