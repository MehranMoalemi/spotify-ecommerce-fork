import { withSVGWrapper } from "@/src/shared/ui/hocs"
import { SVGProps } from "react"

const SecurePayment:React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 142 142" {...props}><circle cx="70.8" cy="70.8" r="70.8" fill="#2D201E" /><path fill="#CD4132" fill-rule="evenodd" d="M68.8 38.4q1.9-.7 3.8-.2l.6.2L95 47.1q1.6.7 2.7 2.3a7 7 0 0 1 1.3 3.4v18.4q0 8.2-4 15.3a29 29 0 0 1-10.7 11l-.8.4-10.4 5.6a4 4 0 0 1-3.7.2l-.5-.2-10.4-5.6q-6.8-3.7-11-10.6A31 31 0 0 1 43 72.2V53.4a7 7 0 0 1 1-3.6q1-1.7 2.6-2.4l.4-.3zm12.9 21.4L67.4 75l-5.5-6a3 3 0 0 0-2.2-.9 3 3 0 0 0-2.2 1q-1 1-1 2.3 0 1.5 1 2.4l7.5 8a3 3 0 0 0 2.4 1 3 3 0 0 0 2.4-1l16.3-17.4a3 3 0 0 0 1-2.4 4 4 0 0 0-1-2.4 3 3 0 0 0-2.2-1 3 3 0 0 0-2.2 1" clip-rule="evenodd" /><circle cx="70.5" cy="70.5" r="64.5" stroke="#DA723D" stroke-width="2" /></svg>

        </>

    )
}

export const SecurePaymentSvg = withSVGWrapper(SecurePayment)