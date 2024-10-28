import { withSVGWrapper } from "@/src/shared/ui/hocs"
import { SVGProps } from "react"

const EyeOff: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <>
            <svg {...props} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.41313 2.1975L2.1975 5.41313C1.11375 6.49688 0.57 7.03875 0.285 7.72875C-8.3819e-08 8.41875 0 9.18375 0 10.7175V19.3612C0 20.91 3.91155e-07 21.6844 0.290625 22.38C0.58125 23.0737 1.13437 23.6175 2.235 24.7031L5.42062 27.8419C6.50062 28.9069 7.0425 29.4394 7.72688 29.7206C8.40938 30 9.16688 30 10.6856 30H19.3931C20.9269 30 21.6919 30 22.3819 29.715C23.0719 29.43 23.6119 28.8881 24.6975 27.8025L27.8025 24.6975C28.8881 23.6119 29.4281 23.0719 29.715 22.3819C30 21.6919 30 20.9269 30 19.3931V10.6875C30 9.16875 30 8.41125 29.7188 7.72688C29.4394 7.04438 28.9069 6.5025 27.8419 5.4225L24.7031 2.23687C23.6156 1.13437 23.0719 0.583125 22.3781 0.2925C21.6844 2.51457e-07 20.91 0 19.3612 0H10.7175C9.18375 0 8.41875 -8.3819e-08 7.72875 0.285C7.03875 0.57 6.49688 1.11375 5.41313 2.1975ZM8.33812 11.4487C8.11711 11.3296 7.8744 11.256 7.62441 11.2324C7.37441 11.2088 7.12222 11.2356 6.88281 11.3114C6.64339 11.3871 6.42162 11.5101 6.23065 11.6732C6.03969 11.8362 5.88342 12.036 5.77112 12.2606C5.65883 12.4852 5.59278 12.73 5.57692 12.9806C5.56105 13.2312 5.59569 13.4825 5.67877 13.7194C5.76185 13.9564 5.89168 14.1743 6.06055 14.3601C6.22943 14.5459 6.43392 14.6959 6.66187 14.8013L7.23375 15.0881L6.76125 16.0369C6.64207 16.2579 6.56849 16.5006 6.54489 16.7506C6.52129 17.0006 6.54814 17.2528 6.62386 17.4922C6.69957 17.7316 6.82261 17.9534 6.98566 18.1443C7.14871 18.3353 7.34847 18.4916 7.57306 18.6039C7.79766 18.7162 8.04252 18.7822 8.29313 18.7981C8.54373 18.8139 8.79497 18.7793 9.03193 18.6962C9.2689 18.6132 9.48676 18.4833 9.67259 18.3144C9.85843 18.1456 10.0084 17.9411 10.1138 17.7131L10.7531 16.4381C11.535 16.6388 12.3281 16.7869 13.125 16.875V18.75C13.125 19.2473 13.3225 19.7242 13.6742 20.0758C14.0258 20.4275 14.5027 20.625 15 20.625C15.4973 20.625 15.9742 20.4275 16.3258 20.0758C16.6775 19.7242 16.875 19.2473 16.875 18.75V16.875C17.6751 16.7856 18.4677 16.639 19.2469 16.4362L19.8844 17.7131C20.1067 18.1582 20.4966 18.4967 20.9685 18.6543C21.4404 18.8118 21.9556 18.7754 22.4006 18.5531C22.8457 18.3308 23.1842 17.9409 23.3418 17.469C23.4993 16.9971 23.4629 16.4819 23.2406 16.0369L22.7663 15.0881L23.3381 14.8013C23.5661 14.6959 23.7706 14.5459 23.9394 14.3601C24.1083 14.1743 24.2382 13.9564 24.3212 13.7194C24.4043 13.4825 24.4389 13.2312 24.4231 12.9806C24.4072 12.73 24.3412 12.4852 24.2289 12.2606C24.1166 12.036 23.9603 11.8362 23.7693 11.6732C23.5784 11.5101 23.3566 11.3871 23.1172 11.3114C22.8778 11.2356 22.6256 11.2088 22.3756 11.2324C22.1256 11.256 21.8829 11.3296 21.6619 11.4487L20.8687 11.8425C19.0465 12.7534 17.0372 13.2277 15 13.2277C12.9628 13.2277 10.9535 12.7534 9.13125 11.8425L8.33812 11.4487Z" fill="#FFCDB6" />
            </svg>

        </>

    )
}

export default withSVGWrapper(EyeOff);