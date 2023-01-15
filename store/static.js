const okImgHref = 'assets/icons/ok.png'
const links = [
  {id: 0, name: 'Каталог', href: '/'},
  {id: 1, name: 'Доставка', href: '/delivery'},
  {id: 2, name: 'Оплата', href: '/payment'},
  {id: 3, name: 'Контакты', href: '/contacts'},
  {id: 4, name: 'О компании', href: '/about'}
]
function disableScroll() {
  //document.querySelector('body').style.scrollBehavior = 'none'
  window.scroll(0, 0)
}

export {
  okImgHref,
  links,
  disableScroll
}