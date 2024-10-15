import { withSVGWrapper } from "@/src/shared/ui/hocs"
import { SVGProps } from "react"

const Light3: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <>
            <svg {...props} width="547" height="587" viewBox="0 0 547 587" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M449.385 0H345.389L0 570.591C40.0985 529.964 144.489 501 266.951 501C405.262 501 520.52 537.946 546.14 586.913L449.385 0Z" fill="#D9D9D9" fill-opacity="0.11" />
            </svg>

        </>

    )
}

export default withSVGWrapper(Light3)