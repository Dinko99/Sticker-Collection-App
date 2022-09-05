import '../Styles/AllStickers.scss'
import CountryTitle from './CountryTitle'
import StickerNumber from './StickerNumber'
import countries from '../utils/countries'
import stickers from '../utils/stickers'



const AllStickers = () => {
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
                        return <StickerNumber key={index} number={item.number} collected={item.collected}  />
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