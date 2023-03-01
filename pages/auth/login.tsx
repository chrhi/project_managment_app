import React from 'react'
import { LoginForm } from '@/components/auth/authUi/LoginForm'
import { Header } from '@/components/auth/authUi/Header'
import { Container } from '@/ui/Container'
import Head from 'next/head'

function login() {
  return (
    <>
     <Head>
        <title>sonatrach log in</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   <Container>
    <Header />
   <div className='w-full pt-12 flex justify-center items-center'>
   <LoginForm />
   </div>
   </Container>
   </>
  )
}

export default login