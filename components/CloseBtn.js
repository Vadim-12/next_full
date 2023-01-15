import { useAtom } from 'jotai'
import { pictureInWindowAtom } from '../store/atoms'
import { disableScroll } from '../store/static'

function CloseBtn() {
  const [, setPictureInWindow] = useAtom(pictureInWindowAtom)

  function handleClose() {
    window.removeEventListener('scroll', disableScroll)
    setPictureInWindow(() => -1)
  }

  return (
    <button className='ModalWindowCloseBtn' onClick={handleClose}>
      <img src='/assets/icons/closeBtn.png' alt='closeButton'/>
    </button>
  )
}

export default CloseBtn