import { IntegrationForm } from '@/components/startup/IntegrationForm'
import { SideBarStartUp } from '@/components/startup/SideBarStartUp'
import { FormLayout } from '@/ui/FormLayout'
import Head from 'next/head'
import React from 'react'

function index() {
  return (
    <>
      <Head>
      <title>app</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='w-full h-screen flex  ' >
    <SideBarStartUp />
   
    <FormLayout className='p-4 w-[80%] ml-[20%]   '>
    <h2 className='text-white font-bold text-4xl m-4 '>integration </h2>
        <IntegrationForm />
    </FormLayout>
    </main>
    </>
  )
}

export default index