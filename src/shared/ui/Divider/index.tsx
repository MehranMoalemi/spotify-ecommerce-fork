import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

const Divider = (props: { children?: string; className?: string; }) => {

    const { children,className } = props;
    const combinedClasses =cn('relative mt-36 w-full flex items-center justify-center mx-auto',className)

    return (
        <div className={combinedClasses}>
            {children ? <h2 className={`
                before:block before:w-[20%]  md:before:w-[40%] before:h-[1px] before:bg-spotify-dark before:absolute before:right-0 before:top-1/2 before:translate-y-[50%]
                after:block after:w-[20%] md:after:w-[40%] after:h-[1px] after:bg-spotify-dark after:absolute after:left-0 after:top-1/2 after:translate-y-[50%]
                text-khaki font-bold text-2xl 
                `}>{children}</h2> : <span className='w-full h-[1px] bg-spotify-dark'></span>}
        </div>
    )
}

export default Divider