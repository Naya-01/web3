import React from 'react';
import { useContext } from 'react';

import { Context as countersContext } from "context/countersContext";

const OkButton = () => {
    const { ok, increaseCounterOk } = useContext(countersContext);
    return <>
        <li>Ok : {ok} <button onClick={increaseCounterOk}> ok</button></li>
    </>;
}

export default OkButton;
