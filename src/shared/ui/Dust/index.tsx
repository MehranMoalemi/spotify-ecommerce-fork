import React from 'react'
import './Dust.css';
import { cn } from '@/lib/utils';

interface DustProps extends React.HTMLAttributes<HTMLDivElement> { }


const Dust = (props: DustProps) => {
    const { className, ...rest } = props;

    return (

        <div className='absolute w-10 h-10'>
            <div className={cn("bg-animation  overflow-hidden", className)}>
                <div className='' id='stars'></div>
                <div className='' id='stars2'></div>
                <div className='' id='stars3'></div>
                <div className='' id='stars4'></div>
            </div>
        </div>

    )
}

export default Dust