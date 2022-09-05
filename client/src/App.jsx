import './App.scss';
import AllStickers from './components/AllStickers';
import Title from './components/Title';
import { useState } from 'react';


function App() {
  const [isCollected, setIsCollected] = useState(false)

  return (
    <>
    <Title />
    <AllStickers />
    </>
  );
}

export default App;
