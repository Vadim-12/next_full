import { okImgHref, disableScroll } from '../store/static'
import { useAtom } from 'jotai'
import { itemsAtom, pictureInWindowAtom } from '../store/atoms'
import { useState } from 'react'

function Picture(props) {
  const [items, setItems] = useAtom(itemsAtom)
  const [, setPictureInWindow] = useAtom(pictureInWindowAtom)

  const id = props.id

  let isSold = items[id].isSold
  let imgSrc = items[id].imgSrc
  let title = items[id].title
  let author = items[id].author
  let priceGood = items[id].priceGood
  let priceBad = items[id].priceBad
  let isInCart = items[id].isInCart

  const [isBuyLoading, setIsBuyLoading] = useState(false)

  function buyHandler() {
    setIsBuyLoading(true)
    setTimeout(() => {
      const newItems = items
      const index = items.findIndex(item => item.id === id)
      try {
        const value = newItems[index].isInCart
        newItems[index].isInCart = !value

        localStorage.setItem('items', JSON.stringify(items))
      } catch (error) {
        console.error(error)
      }
      setItems(() => newItems)
      setIsBuyLoading(false)
    }, 2000)
  }

  function pictureHandler(event) {
    event.preventDefault()

    //console.log(id)
    setPictureInWindow(() => id)
    window.addEventListener('scroll', disableScroll)
  }

  return (
    <div className={ 'good' + (isSold ? ' sold-in-auction' : '') }>
      <a href="/" onClick={pictureHandler}><img className="pic" src={ imgSrc } alt="pic" /></a>
      <div className="good-content">
        <h2>
          <a href="/" onClick={pictureHandler}>«{ title }»</a><br />
          { author }
        </h2>
        {
          !isSold && (
            <div className="buy-block">
              <div className="price-block">
                {
                  priceBad && (
                    <div className="price-bad price-one">
                      { priceBad } $
                    </div>
                  )
                }
                {
                  priceGood && (
                    <div className="price-good price-one">
                      { priceGood } $
                    </div>
                  )
                }
              </div>
              {
                (isBuyLoading && <div className='downloading'>Обрабатывается...</div>) ||
                (!isInCart && <button className="buy-btn" onClick={buyHandler}>Купить</button>) ||
                (isInCart && <button className='buy-btn in-cart' onClick={buyHandler}><img src={okImgHref} alt='OK-img'/>В корзине</button>)
              }
            </div>
          )
        }
        {
          isSold && (
            <div className="buy-block">
              Продана на аукционе
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Picture