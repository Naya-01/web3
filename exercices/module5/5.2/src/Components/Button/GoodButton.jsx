import React from 'react';
import { useContext } from 'react';

import { Context as countersContext } from "context/countersContext";

const GoodButton = () => {
    const { good, increaseCounterGood } = useContext(countersContext);
    return <>
        <li>Good : {good} <button onClick={increaseCounterGood}> good</button></li>
    </>;
}

export default GoodButton;