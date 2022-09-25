import './App.css';
import Button from 'components/Button/Button';
import Display from 'components/Display/Display';
import useLocalStorage from 'hooks/useLocalStorage';

function App() {
  const [counter, setCounter] = useLocalStorage("counter", parseInt(localStorage.getItem('counter')) || 0);

  const handleClick = (e) => { changeCount(e.target.dataset.delta) };

  const changeCount = (valeur) => {
    setCounter(parseInt(valeur));
  };

  return <>
    <Display counter={counter} />
    <Button onclick={handleClick} text="plus" delta={1} />
    <Button onclick={handleClick} text="moins" delta={-1} />
    <Button onclick={handleClick} text="reset" delta={-counter} />
  </>
}

export default App;
