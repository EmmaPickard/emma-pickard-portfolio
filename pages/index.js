import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from 'components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Emma Pickard</title>
        <meta name="description" content="Hire me as your next Full Stack Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link  href="https://fonts.googleapis.com/css2?family=Averia+Libre:ital@1&family=Lato&family=Lilita+One&family=Montserrat:wght@900&family=Quicksand&family=Roboto&family=Titillium+Web&display=swap" rel="stylesheet"/>
        
      </Head>
      <main >
        <Header/>
      </main>
    </>
  )
}
