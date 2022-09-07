import '../Styles/AllStickers.scss';
import CountryTitle from './CountryTitle';
import StickerNumber from './StickerNumber';
import stickers from '../utils/stickers';
import fwcFront from '../utils/fwcFront';
import fwcBack from '../utils/fwcBack';
import cocaCola from '../utils/cocaCola';

const AllStickers = ({ countries, setStickersCollected }) => {
  return (
    <main>
      <div className='stickers-section'>
        <CountryTitle title='fwc' />
        <div className='stickers'>
          {fwcFront.map((number, index) => {
            return (
              <StickerNumber
                stickers={stickers}
                s
                key={index}
                number={number}
                setStickersCollected={setStickersCollected}
              />
            );
          })}
        </div>
      </div>
      {countries.map((country, index) => {
        return (
          <div key={index} className='stickers-section'>
            <CountryTitle title={country} />
            <div className='stickers'>
              {stickers.map((item, index) => {
                return (
                  <StickerNumber
                    key={index}
                    number={item}
                    setStickersCollected={setStickersCollected}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      <div className='stickers-section'>
        <CountryTitle title='fwc' />
        <div className='stickers'>
          {fwcBack.map((number, index) => {
            return (
              <StickerNumber
                key={index}
                number={number}
                setStickersCollected={setStickersCollected}
              />
            );
          })}
        </div>
      </div>
      <div className='stickers-section'>
        <CountryTitle title='cocacola' />
        <div className='stickers'>
          {cocaCola.map((number, index) => {
            return (
              <StickerNumber
                key={index}
                number={number}
                setStickersCollected={setStickersCollected}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default AllStickers;
