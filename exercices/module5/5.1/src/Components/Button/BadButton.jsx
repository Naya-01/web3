import React from 'react';
import { useContext } from 'react';

import { Context as countersContext } from "context/countersContext";

const BadButton = () => {
    const { bad, increaseCounterBad } = useContext(countersContext);
    return <>
        <li>Bad : {bad} <button onClick={increaseCounterBad}> bad</button></li>
    </>;
}

export default BadButton;
