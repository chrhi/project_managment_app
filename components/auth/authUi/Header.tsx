import { Row } from '@/ui/Row'
import Link from 'next/link'
import React from 'react'

export function Header() {
  return (
   <Row className='justify-start w-full h-[70px] items-center px-8'>
    <Link href={"/"} className='text-white  cursor-pointer text-xl' > go back</Link>
   </Row>
  )
}

  