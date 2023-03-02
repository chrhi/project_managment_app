import { Row } from '@/ui/Row'
import { inputs } from '@/ui/styles'
import { Col } from '@/ui/Col'
import { layout } from '@/ui/styles'
import {useState} from 'react'
import { stakeHolderType } from '@/util/types'
import {IMPACT} from '@/util/types'
import { RowInput } from '@/ui/inputs/RowInput'


export  function StakeholdersForm() {

  const initialState : stakeHolderType = {
    name:"",
    description:"",
    email:"",
    impact:IMPACT.LOW,
    phone:123

  }
  const [stakeHolders , setStakeHolders] = useState<stakeHolderType[]>([initialState])




  return (
    <Col className={` w-full mx-auto xl:w-[1270px] gap-y-4 p-4`}>
      {
        stakeHolders.map((item , index) =>  <RowInput key={item.description + item.phone} state={stakeHolders}  setState={setStakeHolders} index={index} />)
      }

   
   
   </Col>
  )
}

