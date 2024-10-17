import React from 'react'

const LinkIcon = (props: { color: string; className: string; }) => {
    const { color,className } = props;

    return (
        <>
            <svg className={className} width="43" height="43" viewBox="0 0 43 43" fill='none' xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5833 18.4167L40 3M40 3H29.7222M40 3V13.2778M40 25.6111V35.8889C40 36.9792 39.5669 38.0249 38.7959 38.7959C38.0249 39.5669 36.9792 40 35.8889 40H7.11111C6.02078 40 4.9751 39.5669 4.20412 38.7959C3.43313 38.0249 3 36.9792 3 35.8889V7.11111C3 6.02078 3.43313 4.9751 4.20412 4.20412C4.9751 3.43313 6.02078 3 7.11111 3H17.3889" stroke={color} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </>
    )
}

export default LinkIcon