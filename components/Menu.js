import Link from 'next/link'
import { useAtom } from 'jotai'
import { isMobileMenuActiveAtom } from '../store/atoms'
import { links } from '../store/static'

function Menu() {
  const [, setIsMobileMenuActive] = useAtom(isMobileMenuActiveAtom)
  function chooseLinkMenu() {
    setIsMobileMenuActive(false)
  }
  return (
    <nav className="menu">
      {
        links.map(link => {
          return (
            <Link key={link.id} className="menu__link" href={link.href} onClick={chooseLinkMenu}>
              {link.name}
            </Link>
          )
        })
      }
    </nav>
  )
}

export default Menu