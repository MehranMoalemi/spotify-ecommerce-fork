import React from 'react'
import PackageInfo from './PackageInfo'
import { Combobox } from '@/src/widgets/shadcn/Combobox'
import { comboItems } from '@/src/shared/constants'
import { Input } from '@/src/shared/ui/Input'
import PasswordInput from '@/src/widgets/PasswordInput'
import { Button } from '@/src/shared/ui/Button/button'
import { LogoSvg } from '@/src/shared/Icons/Logo'

export const PackageDetail = () => {
  return (
    <main className='main-layout'>
      <div className='flex w-full flex-col lg:flex-row'>
        <PackageInfo />
        <div className='basis-1/2 -mt-6 lg:mt-0 mx-auto  lg:mr-20 max-w-[24rem] p-4 lg:p-0'>
          <div>
            <h2 className='text-xl text-spotify-dark'>لطفا اطلاعات اکانت اسپاتیفای خود را وارد کنید.</h2>
            <p className='text-sm mt-4  text-gray-300'>بعد از این که اطلاعات اکانت اسپاتیفای خودتون رو وارد کردین ما در کمترین زمان ممکن اکانتتون رو براتون را شارژ میکنیم و از طریق ایمیل بهتون اطلاع میدیم.</p>
          </div>
          <form action="" className='flex flex-col gap-6 mt-6'>
            <div className='flex flex-col gap-4 '>
              <label className='text-spotify-dark '>اکانت اسپاتیفای دارید یا ما براتون بسازیم؟</label>
              <Combobox items={comboItems}  />
            </div>
            <div className='flex flex-col gap-4 '>
              <label className='text-spotify-dark '>آدرس ایمیل اسپاتیفای:</label>
              <Input className='text-left' placeholder='example@gmail.com' type='email'/>
            </div>
            <div className='flex flex-col gap-4 '>
              <label className='text-spotify-dark '>پسوورد اکانت اسپاتیفای:</label>
              <PasswordInput />
            </div>
            <Button className='text-lg mt-4 py-6' variant={'primary'}>
              ثبت سفارش
              <LogoSvg className='mr-2'/>
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

