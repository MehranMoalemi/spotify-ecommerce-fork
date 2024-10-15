import localFont from 'next/font/local';

const iranSansX = localFont({
  src: [
    {
      path: '../public/fonts/IRANSansX/100-IRANSansXThin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANSansX/200-IRANSansXUltraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANSansX/300-IRANSansXLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANSansX/400-IRANSansXRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANSansX/500-IRANSansXMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANSansX/600-IRANSansXDemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANSansX/700-IRANSansXBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANSansX/800-IRANSansXExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/IRANSansX/900-IRANSansXBlack.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-iranSansX',
  display: 'swap',
});

export default iranSansX;
