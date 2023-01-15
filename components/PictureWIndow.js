import { pictureInWindowAtom, itemsAtom } from '../store/atoms'
import CloseBtn from './CloseBtn'
import { useAtom } from 'jotai'
import { disableScroll } from '../store/static'

function PictureWindow() {
  const [pictureInWindow, setPictureInWindow] = useAtom(pictureInWindowAtom)
  const [items, ] = useAtom(itemsAtom)
  const openedPicture = items[pictureInWindow]
  function closeWindow() {
    setPictureInWindow(-1)
    window.removeEventListener('scroll', disableScroll)
  }
  function notCloseOnClick(event) {
    event.stopPropagation()
  }

  return (
    <div className={'picture-window-wrap' + (pictureInWindow !== -1 ? ' active' : '')} onClick={closeWindow}>
      <div className="picture-window-block" onClick={notCloseOnClick}>
        <CloseBtn/>
        <div className='picture-window-content'>
          <h1>
            «{ openedPicture && openedPicture.title }», {openedPicture && openedPicture.author}
          </h1>
          <div className='pictures-slider'>
            {/* здесь у каждой картины надо брать ее список отображаемых в слайдере картин и засовывать их в слайдер */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PictureWindow