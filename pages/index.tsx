import Head from 'next/head'
import {Hero} from "@/components/landing/Hero"
import { Navbar } from '@/components/landing/NavBar'
import { Container } from '@/ui/Container'





export default function Home() {
  return (
    <>
      <Head>
        <title>sonatrach</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Container >
      <Navbar />
      <Hero />
      </Container>
    </>
  )
}
