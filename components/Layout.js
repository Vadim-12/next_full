import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import PictureWindow from './PictureWIndow'
import Menu from './Menu'
import { isMobileMenuActiveAtom } from '../store/atoms'
import { useAtom } from 'jotai'

const Layout = ({children}) => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useAtom(isMobileMenuActiveAtom)

  function toggleMobileMenu() {
    setIsMobileMenuActive(prev => !prev)
  }

  return (
    <>
      <PictureWindow/>
      <button
        id="blink"
        onClick={toggleMobileMenu}
        className={'menu-btn' + (isMobileMenuActive ? ' active' : '')}>
        <span></span></button>
      <div className={'menu-window' + (isMobileMenuActive ? ' active' : '')}>
        <Menu />
      </div>
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