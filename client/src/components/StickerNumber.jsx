import { useState, useEffect } from "react";
import {FcCheckmark} from 'react-icons/fc'

const StickerNumber = ({number, setStickersCollected}) => {
  const [isCollected, setIsCollected] = useState(false)
  
  useEffect(()=>{
  }, [isCollected])

  const handleClick = (e) => { 
    setIsCollected(!isCollected)    
    if(isCollected === false){
      setStickersCollected((prev) => prev + 1)
      
    }
    else if(isCollected === true){
      setStickersCollected((prev) => prev - 1)
    }
    
  }

 

  return (
    <p className='sticker-number' onClick={handleClick} >{number} <span className="checkmark" style={{display: isCollected === false ? 'none' : 'block'}}><FcCheckmark /></span></p>
  )
}

export default StickerNumber;