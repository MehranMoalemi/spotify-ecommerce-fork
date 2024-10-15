import { withSVGWrapper } from "@/src/shared/ui/hocs"
import { SVGProps } from "react"

const Light2: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <>
            <svg {...props} width="576" height="598" viewBox="0 0 576 598" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M575.225 0H476.816L0.9375 556.326C49.2913 523.352 142.924 501 250.502 501C398.331 501 519.826 543.207 533.684 597.185L575.225 0Z" fill="#D9D9D9" fill-opacity="0.11" />
            </svg>
        </>

    )
}

export default withSVGWrapper(Light2)