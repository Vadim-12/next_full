import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import PictureWIndow from './PictureWIndow'

const Layout = ({children}) => {
  return (
    <>
      <PictureWIndow/>
      <Head>
        <meta charSet='utf-8'/>
        <title>Онлайн Галерея</title>
        <link rel="shortcut icon" href="/assets/icons/logo.png" type="image/png"/>
      </Head>
      <Header/>
      <main>
        <div className='container'>
          {children}
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Layout