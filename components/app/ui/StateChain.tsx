import React from 'react'
import { StateUi } from './StateUi'
import { Row } from '@/ui/Row'

export function StateChain() {
  return (
    <Row className='w-full
     items-center justify-center flex-col md:flex-row h-fit gap-y-2 md:gap-y-0 md:h-[200px] relative gap-x-4
     pt-12 md:p-0 
     '>
        <div className='border-[10px] rounded-lg border-orange-500 w-[0px] h-[90%] md:h-[0px] md:w-[90%] xl:w-[70%]  z-10 absolute  top-[50%]'  />
        <StateUi text={'demarage'} path={'/app/startup'}/>
        <StateUi text={'planification'} path={'/'}/>
        <StateUi text={'execution'} path={'/'}/>
        <StateUi text={'survauince & metraise'} path={'/'}/>
        <StateUi text={'cloture'} path={'/'}/>
    </Row>
  )
}

 