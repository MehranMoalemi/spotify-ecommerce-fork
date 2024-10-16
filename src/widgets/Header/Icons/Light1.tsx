import { withSVGWrapper } from "@/src/shared/ui/hocs"
import { SVGProps } from "react"

const Light1: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <>
<svg {...props} width="690" height="588" viewBox="0 0 690 588" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M690 0H580L0.322507 541.564C55.5556 524.435 128.841 514 209.247 514C347.58 514 464.835 544.886 505.351 587.609L690 0Z" fill="#D9D9D9" fill-opacity="0.11"/>
</svg>
        </>

    )
}

export default withSVGWrapper(Light1)