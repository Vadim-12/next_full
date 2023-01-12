import React from 'react'
import A from './A'
import Head from 'next/head'

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={'nextjs, test' + keywords}/>
        <title>Главная страница</title>
      </Head>
      <nav>
        <A href='/' text='Главная'/>
        <A href='/users' text='Пользователи'/>
      </nav>
      <div>
        {children}
      </div>
    </>
  )
}

export default MainContainer