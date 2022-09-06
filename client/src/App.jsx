import './App.scss';
import AllStickers from './components/AllStickers';
import Title from './components/Title';
import { useState } from 'react';
import Counter from './components/Counter';
import countries from './utils/countries'


function App() {
  const [stickersCollected, setStickersCollected] = useState(0);
  let overall = countries.length * 19 + 38;

  return (
    <>
    <Title />
    <Counter overall={overall} stickersCollected={stickersCollected} />
    <AllStickers countries={countries} stickersCollected={stickersCollected} setStickersCollected={setStickersCollected} />
    </>
  );
}

export default App;
