import { withSVGWrapper } from "@/src/shared/ui/hocs"
import { SVGProps } from "react"

const Support:React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 143 143" {...props}><path fill="#2D201E" d="M143 71.5a71.5 71.5 0 1 1-143 0 71.5 71.5 0 0 1 143 0" /><path fill="#DA723D" d="M40.7 86c-3.1-.8-5.4-4.5-5.5-8.7q-.1-7.6 4.1-9.2zm65.2-18.2c4 2.6 4.2 6.2 4 10 0 4-2.4 7.4-5.4 8.3z" /><path fill="#CD4132" d="M80.8 103.1q-.9-.8-2.2-.8H66.8c-2.4 0-4 1.6-4 3.8 0 2.3 1.7 3.9 4 4h11.6a4 4 0 0 0 2.4-1c2.5-3 0-6 0-6" /><path fill="#DA723D" d="M103.3 62.4q-.6-.4-.9-1A3 3 0 0 0 100 60h-.2a3 3 0 0 0-3 2.7l-1.1 12.1-.5-12.6a9 9 0 0 0-4.4 6.8q-.6 4.5-.8 9.2c-.1 2-.4 4.2-.1 6.3q.8 5.2 6 7.4l-.4 1A18 18 0 0 1 83 103.7a7 7 0 0 1 .5 3.2h.1q11-2.9 15.1-13.4.4-.8 1.3-1.3 2.2-1 2.4-3.3l1.9-23.5c0-1-.2-2.5-1-3m-48.7 7.3a9 9 0 0 0-4.5-7.4l-.4 11.6L48.6 63a3.3 3.3 0 0 0-6-1.6l-.2.3q-1.4 1.5-1.5 3.2l.4 5.2 1.5 18.5q.5 3.7 4.2 3.7c4.5-.2 8.6-4.3 8.5-8.8q-.2-6.9-.9-13.8" /><path fill="#DA723D" d="M105.6 57.1a34.7 34.7 0 0 0-66 0s7.4-6.6 15 0c7.4 6.3 5.3 21 5.3 21s4-27 25-22.6c21 4.5 20.7 1.6 20.7 1.6" /><circle cx="71.5" cy="71.5" r="64.5" stroke="#DA723D" stroke-width="2" /></svg>


        </>
    )
}

export const SupportSvg = withSVGWrapper(Support)