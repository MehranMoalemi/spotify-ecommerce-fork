'use client'
import { packageItems } from "@/src/features/home/constants";
import Dust from "@/src/shared/ui/Dust";
import Link from "next/link";
import React, { useRef, useState } from "react";

const PackageInfo = () => {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const shadowRef = useRef<HTMLDivElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const card = e.currentTarget;
        const xPos = (window.innerWidth / 2 - e.pageX + 150) / 10;
        const yPos = (window.innerHeight / 2 - e.pageY + 150) / 10;

        card.style.transform = `rotateX(${yPos}deg) rotateY(${xPos}deg)`;
        if (shadowRef.current) {

            shadowRef.current.style.transform = `rotateX(${yPos}deg) rotateY(${xPos}deg) `;
        }
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsHovered(true);
        const card = e.currentTarget;
        card.style.transition = 'transform 0.3s';
        if (shadowRef.current) {
            shadowRef.current.style.transition = 'transform 0.3s ';
            shadowRef.current.classList.remove('shadow-height');
            shadowRef.current.style.height = '20px';
            shadowRef.current.classList.add('shadow-top');
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsHovered(false);
        const card = e.currentTarget;
        card.style.transition = 'transform 0.3s';
        card.style.transform = 'rotate3d(8, -1, -2, -0.15turn)';
        if (shadowRef.current) {
            shadowRef.current.style.transition = 'transform 0.3s';
            shadowRef.current.classList.add('shadow-height');
            shadowRef.current.style.top = '60%';
            shadowRef.current.style.transform = 'rotate3d(8, -1, -2, -0.15turn)';
            shadowRef.current.classList.remove('shadow-top');

        }
    };
    return (
        <>
            <div className="relative  w-full lg:basis-1/2  overflow-visible  mx-auto min-h-[37rem] lg:min-h-[40rem]  bg-[url('/svg/spotifyLight.svg')] bg-contain bg-no-repeat -top-20 bg-top h-full ">
                <Dust className="w-[8rem] h-[20rem]  top-[8rem] right-[50vw] translate-x-[50%] lg:right-[19.5vw] " />
                <div className="relative max-[390px]:top-[12vw] max-[428px]:top-[22vw] top-32 lg:top-[4vw]  flex  flex-col items-center">
                    <div
                        ref={cardRef}
                        className="relative top-20  lg:top-[10vw] mt-20   sm:right-2  h-[266px] z-[4]   mr-5 package-detail-paper object-contain bg-cover bg-center rounded-lg shadow-xl cursor-pointer bg-[url('/svg/packagePaperDetail.svg')]"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}


                    >
                        {/* info start */}
                        <div className=' z-[3] px-5 py-2 flex flex-col items-center justify-center gap-2 w-full top-4'>
                            <p className='text-khaki text-2xl font-bold mt-6'>یک ماهه</p>
                            <ul className='w-full'>
                                {
                                    packageItems[0].items.map((item: string, index: number) => (
                                        <li key={index} className='text-black flex items-center justify-between py-1 gap-2 px-2'>
                                            <p className='text-xs lg:text-sm whitespace-nowrap '>{item}</p>
                                            <span className='flex-auto h-2 border-t border-dashed border-[#77A48E]'></span>
                                            <svg className='w-4 h-4' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25"><path d="M2.6 22.6h2.8l7.6.2 4.8.3q1.8.2 3.9-.7l.4-2.1q.8-6.5.6-13.1l-.2-1.8q-.2-1.2-1.2-1.4-1.8-.6-3.7-.9L6.2 2.6q-1.7 0-3.3.8l-.2 2.8L2 17.7c0 1.6-.2 3.2.6 5m8.4 1.9-6.7.2c-2.6.1-4-.4-4.3-4.3v-4.1L.5 6V3.2Q.8.9 2.8.2L4.2 0h5l7.3.5q2.4 0 4.7 1 2.6 1 2.7 4.2l.1 2.5-.2 11q0 1.6-.4 3.1-.3 2.2-2.4 2.4l-4.5.3q-2.8 0-5.5-.4" fill="#7C7F8F" /><path d="m7 13.3 3.8 3.7L19 9" stroke="#77A48E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>
                                        </li>

                                    ))
                                }
                            </ul>
                            <div className='flex justify-center items-center   px-4 mt-1 bg-spotify-dark rounded-2xl'>
                                <p className='text-white text-lg font-semibold '>
                                    2000
                                    <span className='text-sm mr-1 font-light '>تومان</span>
                                </p>
                            </div>
                        </div>
                        {/* info end */}
                    </div>
                    <div
                        ref={shadowRef}
                        className="relative  bottom-8 lg:bottom-[5vw] min-[1100px]:bottom-0 min-[1200px]:-bottom-[2vw] max-[530px]:w-[55vw]  z-[3] mx-auto w-[38vw] h-[180px] sm:w-[35vw] md:w-[22vw] lg:w-[18vw]  lg:h-[240px] lg:top-10  package-detail-paper  bg-cover bg-center rounded-lg  cursor-pointer  bg-[url('/svg/card-shadow.svg')]"
                    ></div>
                </div>
            </div>


        </>
    );
};

export default PackageInfo;
