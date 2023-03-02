import { ReactNode } from "react"

type FormLayoutType ={
    children:ReactNode,
    className? :string
}

export function FormLayout({children , className}:FormLayoutType) {
  return (
    <div className={`   min-h-screen h-fit flex flex-col  ${  className}`}> 
        {children}
    </div>
  )
}

