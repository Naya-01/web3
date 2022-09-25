import './App.css';
import { useEffect, useState } from 'react';
import Button from 'components/Button/Button';
import Display from 'components/Display/Display';
function App() {
  const [counter, setCounter] = useState(parseInt(localStorage.getItem('counter')) || 0);

  const handleClick = (e) => { changeCount(e.target.dataset.delta) };

  const changeCount = (valeur) => {
    localStorage.setItem("counter", JSON.stringify(counter + parseInt(valeur)));
    console.log(counter + parseInt(valeur));
    setCounter(counter + parseInt(valeur));
  };

  return <>
    <Display counter={counter} />
    <Button onclick={handleClick} text="plus" delta={1} />
    <Button onclick={handleClick} text="moins" delta={-1} />
    <Button onclick={handleClick} text="reset" delta={-counter} />
  </>
}

export default App;
