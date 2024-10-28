'use client';
import { LogoSvg } from '@/src/shared/Icons/Logo';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Light1 from '../Icons/Light1';
import Light2 from '../Icons/Light2';
import Light3 from '../Icons/Light3';
import { usePathname } from 'next/navigation';
import { lightValues, navigationItems } from '../constants';
import useScrollVisibility from './hooks/useScrollVisibility';

export const Header = () => {
  const [activeLight, setActiveLight] = useState<number | null>(1);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isLightsVisible, setIsLightsVisible } = useScrollVisibility();

  const path = usePathname();
  const validPaths: Array<'/' | 'contactus' | 'packages'> = ['/', 'contactus', 'packages'];

  const defaultPath: '/' | 'contactus' | 'packages' = validPaths.includes(path as any) ? (path as '/' | 'contactus' | 'packages') : '/';

  const defaultAddress = defaultPath === '/' ? lightValues['home'] : lightValues[defaultPath];

  const handleMouseEnter = (index: number) => {
    if (path !== '/') setActiveLight(index);
    setActiveLight(index);
  };

  const handleMouseLeave = () => {
    setActiveLight(defaultAddress);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isNavOpen]);

 
  return (
    <header
      className={` relative flex items-center md:sticky top-0  right-0 left-0  desktop_nav ${
        isLightsVisible ? null : 'z-50'
      }  flex justify-between w-full max-w-[84rem] py-8  px-6 lg:px-24  h-[4rem]`}
    >
      {/* Mobile Toggle Button */}
      <button className="md:hidden text-white" onClick={toggleNav} aria-label="Toggle navigation">
        <svg width="24" height="24" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 31.4292H31M2 17.1459H31M2 2.86267H31" stroke="#B4B4B4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>

      {/* Navigation */}
      <div className="max-w-[80rem] flex justify-between w-full   mx-auto">
        <nav
          className={`mobile_nav fixed top-0 left-0 right-0 md:relative h-screen md:h-auto  md:bg-transparent z-50 transition-all duration-300 ease-in-out transform ${
            isNavOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          } md:translate-x-0 md:opacity-100`}
        >
          <div className="flex justify-between items-center p-4 md:hidden">
            <button onClick={closeNav} className="text-white text-2xl m-4" aria-label="Close navigation">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.9514 8.46404C17.1335 8.27544 17.2343 8.02283 17.2321 7.76064C17.2298 7.49844 17.1246 7.24763 16.9392 7.06222C16.7538 6.87681 16.503 6.77164 16.2408 6.76936C15.9786 6.76709 15.726 6.86788 15.5374 7.05004L12.0014 10.586L8.46538 7.05004C8.37313 6.95453 8.26279 6.87835 8.14079 6.82594C8.01878 6.77353 7.88756 6.74594 7.75478 6.74479C7.622 6.74363 7.49032 6.76894 7.36743 6.81922C7.24453 6.8695 7.13288 6.94375 7.03899 7.03764C6.94509 7.13154 6.87084 7.24319 6.82056 7.36609C6.77028 7.48898 6.74498 7.62066 6.74613 7.75344C6.74729 7.88622 6.77487 8.01744 6.82728 8.13944C6.87969 8.26145 6.95587 8.37179 7.05138 8.46404L10.5874 12L7.05138 15.536C6.95587 15.6283 6.87969 15.7386 6.82728 15.8606C6.77487 15.9826 6.74729 16.1139 6.74613 16.2466C6.74498 16.3794 6.77028 16.5111 6.82056 16.634C6.87084 16.7569 6.94509 16.8685 7.03899 16.9624C7.13288 17.0563 7.24453 17.1306 7.36743 17.1809C7.49032 17.2311 7.622 17.2564 7.75478 17.2553C7.88756 17.2541 8.01878 17.2265 8.14079 17.1741C8.26279 17.1217 8.37313 17.0456 8.46538 16.95L12.0014 13.414L15.5374 16.95C15.6296 17.0456 15.74 17.1217 15.862 17.1741C15.984 17.2265 16.1152 17.2541 16.248 17.2553C16.3808 17.2564 16.5124 17.2311 16.6353 17.1809C16.7582 17.1306 16.8699 17.0563 16.9638 16.9624C17.0577 16.8685 17.1319 16.7569 17.1822 16.634C17.2325 16.5111 17.2578 16.3794 17.2566 16.2466C17.2555 16.1139 17.2279 15.9826 17.1755 15.8606C17.1231 15.7386 17.0469 15.6283 16.9514 15.536L13.4154 12L16.9514 8.46404Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col md:flex-row  p-10 md:p-0">
            {navigationItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <li
                  onMouseEnter={() => handleMouseEnter(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  className={`custom-list-item group  ${ path === item.link ? 'custom-list-item-active' : 'custom-list-item-inactive'} custom-list-item-hover`}
                >
                  {item.label}
                  <span
                    className={`custom-list-item-span  ${
                       path === item.link ? 'custom-list-item-span-active' : ''
                    }  group-hover:bg-khaki`}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* Logo */}
        <LogoSvg className="mr-auto" />
      </div>
      {/* Lights */}
      {isLightsVisible ? (
        <>
          <Light1
            className={`absolute z-30 hidden xl:block w-[45rem] h-[28rem] top-[2.9rem] right-[.7%] transition-opacity transform $ {
          ${activeLight === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 '}`}
          />

          <Light2 
            className={`absolute z-30 hidden xl:block w-[45rem] h-[28rem] top-[2.9rem] right-[4.8%] transition-opacity transform $ {
          ${activeLight === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 '}`}
          />

          <Light3
            className={`absolute z-30 hidden xl:block w-[45rem] h-[26.4rem] top-[2.9rem] right-[5.5%] transition-opacity transform $ {
          ${activeLight === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 '}`}
          />
        </>
      ) : null}
    </header>
  );
};
