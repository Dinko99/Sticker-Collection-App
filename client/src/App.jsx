import './App.scss';
import AllStickers from './components/AllStickers';
import Title from './components/Title';
import { useState } from 'react';
import Counter from './components/Counter';
import countries from './utils/countries'


function App() {
  const [isCollected, setIsCollected] = useState(false)
  const [stickersCollected, setStickersCollected] = useState(0);
  let overall = countries.length * 19;

  return (
    <>
    <Title />
    <Counter overall={overall} stickersCollected={stickersCollected} />
    <AllStickers countries={countries} stickersCollected={stickersCollected} setStickersCollected={setStickersCollected} />
    </>
  );
}

export default App;
