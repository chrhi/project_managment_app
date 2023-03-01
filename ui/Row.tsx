import { ReactNode } from "react"

type RowType ={
    children:ReactNode,
    className? :string
}

export function Row({children , className}:RowType) {
  return (
    <div className={`flex items-center ${className} `}>
        {children}
    </div>
  )
}

