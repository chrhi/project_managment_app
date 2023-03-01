import React from 'react'
import { StateUi } from './StateUi'
import { Row } from '@/ui/Row'

export function StateChain() {
  return (
    <Row className='w-[500px] items-center justify-center'>
        <StateUi />
        <StateUi />
    </Row>
  )
}

 