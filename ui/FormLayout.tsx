import { ReactNode } from "react"

type FormLayoutType ={
    children:ReactNode,
    className? :string
}

export function FormLayout({children , className}:FormLayoutType) {
  return (
    <div className={`w-[80%] ml-[20%] min-h-screen h-fit flex flex-col  ${  className}`}> 
        {children}
    </div>
  )
}

