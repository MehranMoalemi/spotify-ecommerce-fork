'use client'
import React, { useEffect } from 'react'

const ServiceCard: React.FC<ServiceCardPropsTypes> = (props) => {
  const { children,title } = props;
  return (
    <div className='relative flex flex-col items-center justify-center gap-4 [&>p]:text-center text-black [&>p]:text-md [&>h3]:text-xl [&>h3]:font-semibold w-60 h-52  bg-khaki rounded-3xl px-9 pb-6'>
      {children[0]}
      <h3>
      {title}
      </h3>
      {children[1]}
    </div>
  )
}

export default ServiceCard