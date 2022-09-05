import '../Styles/AllStickers.scss'
import CountryTitle from './CountryTitle'
import StickerNumber from './StickerNumber'
import stickers from '../utils/stickers'
import { useState } from 'react'



const AllStickers = ({countries, stickersCollected, setStickersCollected}) => {
    
    const [number, collected] = stickers;
    
    

  return (
    <main>
        {
            countries.map((country, index)=>{
                return <div key={index} className="stickers-section">
                    <CountryTitle  country={country} />
                    <div className="stickers">
                {
                    stickers.map((item, index)=>{
                        return <StickerNumber key={index} number={item.number} collected={item.collected} stickersCollected={stickersCollected} setStickersCollected={setStickersCollected}   />
                    })
                }
                    </div>
                </div>
            })
        }
    </main>
    
  )
}

export default AllStickers