import { withSVGWrapper } from '@/src/shared/ui/hocs'
import React, { SVGProps } from 'react'

const MobileLightSpot: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <>
            <svg {...props} width="362" height="578" viewBox="0 0 362 578" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M182.083 0H145.279L0.351562 577.39H2.21972C10.8348 536.188 88.326 503.941 182.647 503.941C272.27 503.941 346.698 533.056 361.281 571.303L218.886 0H182.083Z" fill="#D9D9D9" fill-opacity="0.08" />
            </svg>

        </>
    )
}

export default withSVGWrapper(MobileLightSpot)