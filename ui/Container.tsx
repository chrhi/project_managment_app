import { ReactNode } from "react"

type ContainerType ={
    children:ReactNode,
    className? :string
}

export function Container({children , className}:ContainerType) {
  return (
    <div className={`w-full mx-auto xl:w-[1224px]  flex flex-col h-fit ${  className}`}> 
        {children}
    </div>
  )
}

