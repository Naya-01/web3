import Button from 'components/Button/Button'
import Loading from 'components/Loading/Loading'
import Statistics from 'components/Statistics/Statistics'
import { useState } from 'react'



// a proper place to define a component


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () =>{
    setGood(good+1);
  }

  const handleClickNeutral = () =>{
    setNeutral(neutral+1);
  }

  const handleClickBad = () =>{
    setBad(bad+1);
  }
  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={handleClickGood} text="good"/>
      <Button handleClick={handleClickNeutral} text="neutral"/>
      <Button handleClick={handleClickBad} text="bad"/>
      <Loading composant={<Statistics good={good} neutral={neutral} bad={bad}/>}/>
    </div>
  )
}
//<Statistics good={good} neutral={neutral} bad={bad}  />
//<Loading composant={<Statistics good={good} neutral={neutral} bad={bad}/>}/>
export default App