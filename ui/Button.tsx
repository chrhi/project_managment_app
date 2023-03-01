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
    inline-block px-6 py-2 text-xs font-medium  leading-normal cursor-pointer transition-all duration-75 leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]
    ${className}`} onClick={onClick}>
        {children}
    </button>
  )
}

