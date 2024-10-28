import { Button } from '@/src/shared/ui/Button/button'
import { Input } from '@/src/shared/ui/Input'
import React from 'react'

export const ContactUs = () => {
    return (
        <main className='main-layout'>
            <div className='w-full lg:mt-0 mx-auto  max-w-[24rem] p-4 lg:p-0'>
                <div>
                    <h2 className='text-2xl text-spotify-pale'>تماس با ما</h2>
                    <p className=' mt-4  text-gray-300'>لطفا برای ارتباط با ما فرم زیر را پر کنید..</p>
                </div>
                <form action="" className='flex flex-col gap-6 mt-6'>
                    {/* <div className='flex flex-col gap-4 '>
                        <label className='text-spotify-pale '>اکانت اسپاتیفای دارید یا ما براتون بسازیم؟</label>
                        <Combobox items={comboItems} />
                    </div> */}
                    <div className='flex flex-col gap-4 '>
                        <label className='text-spotify-pale '>آدرس ایمیل:</label>
                        <Input className='text-left' placeholder='example@gmail.com' type='email' />
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <label className='text-spotify-pale '>نام و نام خانوادگی:</label>
                        <Input  placeholder='علی جعفری' type='text' />
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <label className='text-spotify-pale '>پیام خود را وارد کنید:</label>
                        <textarea rows={4} className='w-full bg-transparent text-cream border border-cream rounded-xl py-3 px-4 caret-cream placeholder-cream placeholder:opacity-50 outline-none' placeholder='متن پیام...' />
                    </div>
                    <Button className='text-lg mt-4 py-6' variant={'primary'}>
                        ارسال
                    </Button>
                </form>
            </div>
        </main>
    )
}

