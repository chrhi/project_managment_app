import { stakeHolderType } from "@/util/types"
import { ChangeEvent, Dispatch, SetStateAction , useState } from "react"
import { Button } from "../Button"
import { Row } from "../Row"
import { Col } from "../Col"

type RowInputProps ={
  state:stakeHolderType[],
  setState: Dispatch<SetStateAction<stakeHolderType[]>>,
  index:number
}

export  const  RowInput = ({state , setState , index }:RowInputProps) => {



  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
    //getting the data from the targeted input 
    const {name , value } = e.target
    const list:stakeHolderType[] = [...state]
    //@ts-ignore
    list[index][name] = value  
    setState([...list])
    
    
    
  }

  const handleRemove = () =>{
  //    const list:item[]  = [...state]
  //   //if we have one item we should not delete it
  //   if(state.length == 1) return
  //  const newList = list.filter((item , i) => i !== index)
   
  //   setState([...newList])
  }

  return (
    <Row className="w-full h-[300px] ">
        <Col className="w-full">
            
        </Col>
    </Row>
  )
}

