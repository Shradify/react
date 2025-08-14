import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-400',
    textColor = 'twxt-white',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-3xl ${className} ${bgColor} ${textColor}`} {...props}>
{/*button text*/}  {children}
        </button>
    )
}

export default Button
