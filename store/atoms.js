import { atom } from 'jotai'

const isMobileMenuActiveAtom = atom(false)
const queryAtom = atom('')
const pictureInWindowAtom = atom(-1)
const itemsAtom = atom([
  {id: 0, title: 'Рождение Венеры', author: 'Сандро Боттичелли', imgSrc: '../assets/icons/pic1.png', isInCart: false, priceGood: 1000000, priceBad: 2000000},
  {id: 1, title: 'Тайная вечеря', author: 'Леонардо да Винчи', imgSrc: '../assets/icons/pic2.png', isInCart: false, priceGood: 3000000},
  {id: 2, title: 'Сотворение Адама', author: 'Микеланджело', imgSrc: '../assets/icons/pic3.png', isInCart: false, priceGood: 5000000, priceBad: 6000000},
  {id: 3, title: 'Урок анатомии', author: 'Рембрандт', imgSrc: '../assets/icons/pic4.png', isInCart: false, isSold: true}
])

export {
  isMobileMenuActiveAtom,
  queryAtom,
  pictureInWindowAtom,
  itemsAtom
}