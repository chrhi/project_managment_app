import React, { ReactNode } from 'react'


type ButtonType ={
    children:ReactNode,
    className? :string,
    onClick : () => void 

}

export function Button({children , className , onClick}:ButtonType) {
  return (
    <button
    
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className={`
    inline-block px-6 py-2 text-xs font-medium  leading-normal cursor-pointer transition-all duration-75 
    ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

