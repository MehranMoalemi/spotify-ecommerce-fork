import { FastDeliverySvg } from "../../../pages/home/ui/icons/FastDeliverySvg";
import { LegalChargeSvg } from "../../../pages/home/ui/icons/LegalChargeSvg";
import { SecurePaymentSvg } from "../../../pages/home/ui/icons/SecurePaymentSvg";
import { SupportSvg } from "../../../pages/home/ui/icons/SupportSvg";

export const serviceItems = [
  {
    title: "شارژ قانونی",
    description: "در اینجا ما اکانت خودتان را به صورت واقعی شارژ میکنیم",
    SvgComponent: LegalChargeSvg,
    svgClasses: "mt-[-3.5rem] w-36",
  },
  {
    title: "پشتیبانی",
    description:
      "تیم پشتیبانی ما هر زمان که به مشکل برخوردید راهنماییتون میکنه",
    SvgComponent: SupportSvg,
    svgClasses: "mt-[-3.5rem] w-36",
  },
  {
    title: "تحویل سریع",
    description:
      "تمام تلاش ما این است که در کمترین زمان ممکن کار شما رو انجام بدیم",
    SvgComponent: FastDeliverySvg,
    svgClasses: "mr-14 mt-[-3.5rem] w-52",
  },
  {
    title: "پرداخت مطمئن",
    description: "به راحتی و با امن ترین درگاه های پرداخت خرید خود انجام دهید",
    SvgComponent: SecurePaymentSvg,
    svgClasses: "mt-[-3.5rem] w-36",
  },
];
