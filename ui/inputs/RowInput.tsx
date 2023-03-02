import { stakeHolderType } from "@/util/types"
import { ChangeEvent, Dispatch, SetStateAction , useState } from "react"
import { Button } from "../Button"
import { Row } from "../Row"
import { Col } from "../Col"
import { inputs } from "../styles"

type RowInputProps ={
  state:stakeHolderType[],
  setState: Dispatch<SetStateAction<stakeHolderType[]>>,
  index:number
}

export  const  RowInput = ({state , setState , index }:RowInputProps) => {

  const [stakeHolder , setStateHolder] = useState<stakeHolderType>()

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
    <Col className="w-full h-[300px] ">
        <Row className="w-full gap-x-4 my-2">
            <Col className='w-1/2 h-full '>
                <label className='text-white text-xl m-1  '>name</label>
                <input className={`${inputs.input} bg-black  `} type='text' />
            </Col>
            <Col className='w-1/2 h-full '>
                <label className='text-white text-xl m-1  '>email</label>
                <input className={`${inputs.input} bg-black  `} type='email' />
            </Col>
            <Col className='w-1/2 h-full '>
                <label className='text-white text-xl m-1  '>phone</label>
                <input className={`${inputs.input} bg-black  `} type='email' />
            </Col>
        </Row>
        <Row className="w-full my-2">
            <Col className='w-full h-full  '>
               <label className='text-white text-2xl m-1  '>description </label>
               <textarea className={`${inputs.input} bg-black h-[130px] font-semibold `} ></textarea>
            </Col>
        </Row>
    </Col>
  )
}

