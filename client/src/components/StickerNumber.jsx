import { useState } from "react";
import {FcCheckmark} from 'react-icons/fc'

const StickerNumber = ({number, collected}) => {
  const [isCollected, setIsCollected] = useState(collected)

  


  const handleClick = (e) => {
   setIsCollected(!isCollected)
  }
  
  return (
    <p className='sticker-number' onClick={handleClick} >{number} <span className="checkmark" style={{display: isCollected === false ? 'none' : 'block'}}><FcCheckmark /></span></p>
  )
}

export default StickerNumber;