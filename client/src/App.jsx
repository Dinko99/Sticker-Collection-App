import './App.scss';
import AllStickers from './components/AllStickers';
import Title from './components/Title';
import { useState } from 'react';
import Counter from './components/Counter';


function App() {
  const [isCollected, setIsCollected] = useState(false)

  return (
    <>
    <Title />
    <Counter />
    <AllStickers />
    </>
  );
}

export default App;
