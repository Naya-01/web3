import BadButton from 'Components/Button/BadButton';
import GoodButton from 'Components/Button/GoodButton';
import OkButton from 'Components/Button/OkButton';
import React from 'react';

const App = () => {
  return <>
    <div>
        <GoodButton />
        <BadButton />
        <OkButton />
    </div>
  </>;
}

export default App;

