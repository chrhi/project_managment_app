import { Row } from '@/ui/Row'
import React from 'react'
import { inputs } from '@/ui/styles'
import { Col } from '@/ui/Col'

export  function IntegrationForm() {
  return (
   <Col className='w-full h-full gap-y-4 p-4 mx-auto xl:w-[1270px] '>
    <Row className='w-full h-[50px] items-center px-2 gap-x-4 my-4 '>
       <Col className='w-1/2 h-full '>
       <label className='text-white text-xl m-1  '>title</label>
       <input className={`${inputs.input} bg-black  `} />
       </Col>
       <Col className='w-1/2 h-full '>
       <label className='text-white text-xl m-1  '>description</label>
       <input className={`${inputs.input} bg-black  `} />
       </Col>
    </Row>

    <Row className='w-full h-[70px] items-center mt-10  mb-4 '>
        <Col className='w-full '>
        <label className='text-white text-3xl m-1'>chef de project</label>
          <Row className='w-full gap-x-4 px-2'>
            <Col className='w-1/2 h-full '>
               <label className='text-white text-xl m-1  '>name</label>
               <input className={`${inputs.input} bg-black  `} />
            </Col>
            <Col className='w-1/2 h-full '>
              <label className='text-white text-xl m-1  '>email</label>
              <input className={`${inputs.input} bg-black  `} type='email' />
            </Col>
            <Col className='w-1/2 h-full '>
              <label className='text-white text-xl m-1  '>phone</label>
               <input className={`${inputs.input} bg-black  `} type='number' />
            </Col>
          </Row>
        </Col>
    </Row>

    <Row className='w-full h-[150px] items-center px-2 gap-x-4  my-4'>
       <Col className='w-full h-full  '>
         <label className='text-white text-2xl m-1  '>project goals</label>
         <textarea className={`${inputs.input} bg-black h-[130px] font-semibold `} ></textarea>
       </Col>
    </Row>
    <Row className='w-full h-[150px] items-center px-2 gap-x-4  my-4'>
       <Col className='w-full h-full  '>
         <label className='text-white text-2xl m-1  '>Project scop </label>
         <textarea className={`${inputs.input} bg-black h-[130px] font-semibold `} ></textarea>
       </Col>
    </Row>

    <Row className='w-full h-[50px] items-center px-2 gap-x-4 my-4 '>
       <Col className='w-1/2 h-full '>
       <label className='text-white text-xl m-1  '>Budget</label>
       <input className={`${inputs.input} bg-black  `} type='number' />
       </Col>
    </Row>
    <Row className='w-full h-[50px] items-center px-2 gap-x-4 my-4 '>
       <Col className='w-1/2 h-full '>
       <label className='text-white text-xl m-1  '>date start</label>
       <input className={`${inputs.input} bg-black  `} />
       </Col>
       <Col className='w-1/2 h-full '>
       <label className='text-white text-xl m-1  '>date end</label>
       <input className={`${inputs.input} bg-black  `} />
       </Col>
    </Row>

   
   </Col>
  )
}

