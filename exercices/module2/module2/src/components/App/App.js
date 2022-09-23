import './App.css';
import { useState } from 'react';
import Button from 'components/Button/Button';
import Display from 'components/Display/Display';
function App() {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return <>
  <Display counter={counter}/>
  <Button onclick={increaseByOne} text="plus"/>
  <Button onclick={decreaseByOne} text="moins"/>
  <Button onclick={setToZero} text="reset"/>
  </>
}

export default App;
