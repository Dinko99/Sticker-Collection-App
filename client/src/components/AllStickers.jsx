import '../Styles/AllStickers.scss'
import CountryTitle from './CountryTitle'
import StickerNumber from './StickerNumber'
import countries from '../utils/countries'
import numbers from '../utils/numbers'



const AllStickers = () => {
  return (
    <main>

        {
            countries.map((country, index)=>{
                return <div key={index} className="stickers-section">
                    <CountryTitle  country={country} />
                    <div className="stickers">
                {
                    numbers.map((number, index)=>{
                        return <StickerNumber key={index} number={number} />
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