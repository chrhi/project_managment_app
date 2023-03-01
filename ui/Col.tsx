import React, { ReactNode } from 'react'

type ColType ={
    children:ReactNode,
    className? :string
}


export function Col({children , className}:ColType) {
  return (
    <div className={` flex flex-col ${className}`}>
        {children}
    </div>
  )
}
