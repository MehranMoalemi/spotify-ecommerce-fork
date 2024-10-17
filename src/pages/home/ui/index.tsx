import { faqItems, packageItems, serviceItems } from '@/src/features/home/constants';
import React from 'react'
import ServiceCard from './ServiceCard';
import Package from './Package';
import Radios from '@/src/pages/home/ui/icons/Radios';
import Divider from '@/src/shared/ui/Divider';
import Angel from '@/src/pages/home/ui/icons/Angel';
import Gramaphone from '@/src/pages/home/ui/icons/Gramaphone';
import { Faq } from '@/src/shared/ui/Faq';
import Link from 'next/link';
import LinkIcon from './icons/LinkIcon';
import Dogs from './icons/Dogs';
import MobileLightSpot from './icons/MobileLightSpot';

export const Home = () => {
  return (
    <main className="relative flex min-h-screen max-w-[80rem] mx-auto flex-col items-center justify-between lg:px-24   md:top-[6.5rem]">
      <section className='flex mb-36 flex-col xl:flex-row'>
        <MobileLightSpot  className='absolute w-[20rem] right-1/2 translate-x-[50%] top-2 xl:hidden'/>
        <Dogs className='relative z-40  w-[20rem] mx-auto xl:w-[25rem]   -top-2 xl:top-20 order-2 xl:order-1'/> 
      <div className="relative  mr-auto flex px-4 w-full xl:w-1/2  flex-col items-end justify-center gap-10 order-1 xl:order-2">
        <div className="relative  flex h-40 xl:h-60 w-full xl:w-[25rem] flex-col items-center justify-center gap-4 rounded-[15px] bg-spotify-main text-center text-white before:absolute md:before:right-[-20px] before:right-[0] before:top-1/2 before:h-0 before:w-0 before:-translate-y-1/2 before:transform md:before:border-b-[10px] md:before:border-l-[20px] md:before:border-t-[10px] before:border-b-transparent before:border-l-spotify-main before:border-t-transparent md:before:content-['']">
          <p className="text-2xl xl:text-3xl text-spotify-darker">
            مرجع تخصصی<br />
            خرید اکانت های پرمیوم
          </p>
          <span className="text-3xl xl:text-[4rem] font-extrabold text-black">
            <strong>
              اسپاتیفای
            </strong>
          </span>
        </div>
        <div className="flex justify-between gap-4 md:gap-9 ">
          <Link href={'#'} className="flex w-1/2 md:max-w-[12rem] flex-col items-center justify-center gap-2 rounded-2xl border-[6px] border-spotify-dark p-3 text-center">
            دیدن بخش <br/>مقاله ها
            <LinkIcon className='h-6 w-6 ' color='#4F796F'/>
          </Link>
          <Link href={'#'} className="whitespace-wrap flex w-1/2 md:max-w-[12rem] flex-col items-center justify-center gap-2 rounded-2xl border-[6px] border-brick bg-brick p-3 text-center font-semibold text-black">
            بسته های اسپاتیفای پرمیوم
            <LinkIcon className='h-6 w-6 '  color='#2D201E'/>
          </Link>

        </div>
      </div>
      </section>

      {/* services */}
      <section className="flex flex-col flex-wrap justify-center gap-20 pt-20  md:flex-row-reverse md:gap-14 lg:gap-14 xl:gap-7 2xl:gap-5">
        {serviceItems.map((service, index) => {
          const SvgComponent = service.SvgComponent;
          return (
            <ServiceCard key={index} title={service.title}>
              <SvgComponent className={service.svgClasses} />
              <p>{service.description}</p>
            </ServiceCard>
          );
        })}
      </section>
      {/* packages */}
      <Divider>بسته های ما</Divider>
      <section className="flex w-full flex-wrap justify-center gap-14 mt-14">

        {packageItems.map((pkg: PackageType,index:number) => (
          <Package key={index} items={pkg.items} link={pkg.link} price={pkg.price} title={pkg.title} />
        ))}
      </section>

      {/* about spotify */}
      <Divider>اسپاتیفای چیست؟</Divider>
      <section className="flex flex-col pt-16 lg:flex-row w-full">
        <p className=" w-[80%] lg:w-[40%]  text-gray-300 text-center mx-auto lg:mx-0 lg:text-right leading-8"><strong className='text-spotify-pale'>Spotify</strong>، یک ارائه دهنده خدمات صوتی و پخش صوتی سوئدی است که در سال 2006  توسط Daniel Ek تأسیس شد. Spotify با نام Spotify Technology S.A در  لوکزامبورگ گنجانده شده است، و دفتر مرکزی آن در استکهلم سوئد با دفتر در  17 کشور مختلف در سراسر جهان قرار دارد. <strong className='text-khaki'>خرید اکانت اسپاتیفای پرمیوم</strong> یکی  از بزرگترین ارائه دهندگان خدمات پخش موسیقی در جهان است که از مارس 2021  بیش از 356 میلیون کاربر فعال ماهانه از جمله 158 میلیون مشترک پرداخت  کننده از جمله 159 میلیون مشترک در جهان است.
          Spotify، یک ارائه دهنده خدمات صوتی و پخش صوتی سوئدی است که در سال 2006  توسط Daniel Ek تأسیس شد.
          Spotify با نام Spotify Technology S.A در  لوکزامبورگ گنجانده شده است، و دفتر مرکزی آن در استکهلم سوئد با دفتر در  17 کشور مختلف در سراسر جهان قرار دارد. خرید اکانت اسپاتیفای پرمیوم یکی  از بزرگترین ارائه دهندگان خدمات پخش موسیقی در جهان است که از مارس 2021  بیش از 356 میلیون کاربر فعال ماهانه از جمله 158 میلیون مشترک پرداخت  کننده از جمله 159 میلیون مشترک در جهان است.</p>
        <div className="flex w-full items-center justify-center  lg:w-1/2 mx-auto lg:items-end lg:justify-end">
          <Radios className="mb-[3.5rem] w-[50vw] mt-8 lg:mt-0 lg:w-[80vw]  " />
        </div>
      </section>

      <Divider>اسپاتیفای پرمیوم</Divider>
      <section
        className="mt-10 flex flex-col items-center justify-start gap-10 min-h-[40rem] "
      >
        <p className="text-center  lg:text-right lg:mx-0 lg:ml-auto w-[80%] mx-auto lg:w-[50%] self-start text-lg">در اینجا باهم برخی از ویژگی های اسپاتیفای پرمیوم که در نسخه رایگان اسپاتیفای وجود نداره رو میبینیم.
          همچنین برخی از ویژگی های مهم اسپاتیفای پرمیوم مانند توانایی دانلود اهنگ ها و گوش دادن بهشون زمانی که افلاین هستید در نسخه مود شده هم وجود نداره و این زمانی که با وصل شدن به اینترنت مشکل دارید بسیار اذیت کننده خواهد بود.
        </p>

        <div className="relative flex w-full   items-center justify-center lg:justify-start self-center  lg:w-1/2 mt-10 lg:mt-60 ">
          <Angel className="absolute  md:hidden md:mt-[25rem]  sm:w-[65vw]   mt-[90vw] w-[70vw]  " />
          <Gramaphone className="absolute hidden md:block mt-[30rem] w-[90vw]  md:w-[65vw]  lg:w-[65vw] lg:mt-[-2rem]" />
        </div>
      </section>
      {/* faq section */}
      <Divider>سوالات متداول</Divider>
      <Faq items={faqItems} type='single' />



    </main>
  )
}

