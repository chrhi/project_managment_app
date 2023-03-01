import { Button } from '@/ui/Button'
import { Col } from '@/ui/Col'
import { Row } from '@/ui/Row'
import Link from 'next/link'
import React from 'react'

export  function RegisterForm() {
  return (
    <Col className='w-[400px] h-[600px] items-center rounded-md gap-y-8  p-8 md:p-0'>
    <Row>
     <h1 className='text-white text-3xl text-center font-poppins font-semibold' >make an account easy and fast</h1>
    </Row>
    
    <Row className='w-full  '>
     <input type='email' required className={`${style.inputStyle} `}  placeholder='email@gmail.com' />
    </Row>
    <Row className='w-full  '>
     <input type='email' required className={`${style.inputStyle} `}  placeholder='confime@gmail.com' />
    </Row>
    <Row className='w-full  '>
    <input type='password' required className={`${style.inputStyle} `}  placeholder='password' />
    </Row>
     <Button onClick={() => {}} className='rounded-full font-bold w-full bg-orange-500 text-white hover:bg-orange-600 transition ease-in '>
       make my account
     </Button>
     <Row>
         <h1 className='text-white text-lg font-poppins  '>do you have an account <Link href={"/"} className='text-orange-500 text-lg'> login </Link></h1>
     </Row>
    </Col>
  )
}


const style = {
    inputStyle:"px-4 py-2 text-white rounded-full w-full  border-[2px]  bg-primary transition  ease-in-out focus:outline-none  focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
}
