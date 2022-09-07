import './App.scss';
import AllStickers from './components/AllStickers';
import Title from './components/Title';
import { useState } from 'react';
import Counter from './components/Counter';
import countries from './utils/countries';
import { useEffect } from 'react';

function App() {
  const [stickersCollected, setStickersCollected] = useState(
    JSON.parse(localStorage.getItem('stickersCollected')) || 0
  );
  let overall = countries.length * 19 + 44;

  useEffect(() => {
    window.localStorage.setItem(
      'stickersCollected',
      JSON.stringify(stickersCollected)
    );
  }, [stickersCollected]);

  return (
    <>
      <Title />
      <Counter overall={overall} stickersCollected={stickersCollected} />
      <AllStickers
        countries={countries}
        stickersCollected={stickersCollected}
        setStickersCollected={setStickersCollected}
      />
    </>
  );
}

export default App;
