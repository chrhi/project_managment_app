import { Col } from '@/ui/Col'
import React from 'react'
import { SideBarItems } from '@/constants/insiating'
import { Button } from '@/ui/Button'
import { useRouter } from 'next/router'

export  function SideBarStartUp() {

  const router = useRouter()

  return (
    <Col className='w-[20%] items-center gap-y-2 bg-black p-4 '>
        <Button  className='w-full flex justify-start text-white hover:bg-secondary  rounded-lg  transition text-xl' onClick={() => {}}> go back </Button>
    {SideBarItems.map(item => (
        <Button key={item.name} className='w-full flex justify-start text-white rounded-lg  hover:bg-secondary transition text-xl xl:text-3xl' onClick={() => router.push(item.path)}> {item.name}  </Button>
    ))}
    </Col>
  )
}

