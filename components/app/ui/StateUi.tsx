import React from 'react'
import { useRouter } from 'next/router'
type StateUiType ={
    text : string,
    path :  string
}

export  function StateUi({text , path}:StateUiType) {

  const router = useRouter()

  return (
    <div className='w-[200px] h-[150px] rounded-lg bg-secondary
     z-30 hover:bg-orange-500  cursor-pointer 
     transition duration-500 transform hover:-translate-y-1
     flex justify-center items-center 
     '
     onClick={() => router.push(path)}
     >
        <h1 className='text-white font-bold text-center text-2xl'>{text}</h1>
    </div>
  )
}

