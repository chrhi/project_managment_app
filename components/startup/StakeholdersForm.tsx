import { Row } from '@/ui/Row'
import React from 'react'
import { inputs } from '@/ui/styles'
import { Col } from '@/ui/Col'


export  function StakeholdersForm() {
  return (
    <Col className='w-full h-full gap-y-4 p-4'>
    <Row className='w-full h-[50px] items-center px-2 gap-x-4 my-4 '>
       <Col className='w-1/2 h-full '>
       <label className='text-white text-xl m-1  '>title</label>
       <input className={`${inputs.input} bg-black  `} />
       </Col>
       <Col className='w-1/2 h-full '>
       <label className='text-white text-xl m-1  '>title</label>
       <input className={`${inputs.input} bg-black  `} />
       </Col>
    </Row>

   
   
   </Col>
  )
}

