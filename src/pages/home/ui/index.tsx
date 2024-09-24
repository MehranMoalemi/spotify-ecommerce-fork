import { servicesData } from '@/src/features/home/constants';
import React from 'react'
import ServiceCard from './ServiceCard';

const Home = () => {
  return (
    <main className="flex min-h-screen max-w-[80rem] mx-auto flex-col items-center justify-between lg:px-24 ">
      {servicesData.map((service, index) => {
        const SvgComponent = service.SvgComponent;
        return (
          <ServiceCard key={index} title={service.title}>
            <SvgComponent className={service.svgClasses} />
            <p>{service.description}</p>
          </ServiceCard>
        );
      })}
    </main>
  )
}

export default Home