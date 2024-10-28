import Link from 'next/link';
import React from 'react'

const Package: React.FC<PackagePropsTypes> = (props) => {
    const { items, title, price, link } = props;

    return (
        <div className='relative w-[17rem] h-[20rem] '>
            <div className={`bg-[url('/svg/packagePaperBack.svg')] w-[17rem] h-[22rem] object-cover absolute top-0 right-[2rem] z-[0] bg-no-repeat`}></div>
            <div className={`bg-[url('/svg/packagePaper.svg')] absolute w-full h-full object-cover  z-[1] bg-no-repeat  `}>
            </div>
            <div className='absolute z-[3] p-5 flex flex-col items-center justify-center gap-3 w-full top-4'>
                <p className='text-spotify-main text-xl font-bold tetx'>{title}</p>
                <ul className='w-full'>
                    {
                        items.map((item: string, index: number) => (
                            <li key={index} className='text-black flex items-center justify-between py-1 gap-2 px-2'>
                                <p className='text-sm whitespace-nowrap '>{item}</p>
                                <span className='flex-auto h-2 border-t border-dashed border-[#77A48E]'></span>
                                <svg className='w-4 h-4' fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25"><path d="M2.6 22.6h2.8l7.6.2 4.8.3q1.8.2 3.9-.7l.4-2.1q.8-6.5.6-13.1l-.2-1.8q-.2-1.2-1.2-1.4-1.8-.6-3.7-.9L6.2 2.6q-1.7 0-3.3.8l-.2 2.8L2 17.7c0 1.6-.2 3.2.6 5m8.4 1.9-6.7.2c-2.6.1-4-.4-4.3-4.3v-4.1L.5 6V3.2Q.8.9 2.8.2L4.2 0h5l7.3.5q2.4 0 4.7 1 2.6 1 2.7 4.2l.1 2.5-.2 11q0 1.6-.4 3.1-.3 2.2-2.4 2.4l-4.5.3q-2.8 0-5.5-.4" fill="#7C7F8F" /><path d="m7 13.3 3.8 3.7L19 9" stroke="#77A48E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>
                            </li>

                        ))
                    }
                </ul>
                <div className='flex justify-between items-center w-full p-2 mt-1'>
                    <Link href={link} className=' py-2 px-3 text-sm rounded-md bg-khaki'>خرید اشتراک</Link>
                    <p className='text-black text-lg font-semibold '>
                        {price}
                        <span className='text-sm mr-1 font-light '>تومان</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Package