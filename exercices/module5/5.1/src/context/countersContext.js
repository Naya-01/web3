import { useState } from "react";
import React from "react";


const Context = React.createContext(null);


const ProviderWrapper = (props) => {

    const [good, setGood] = useState(0);
    const [ok, setOk] = useState(0);
    const [bad, setBad] = useState(0);


    const increaseCounterOk = () => {
        setOk(ok+1);
    }
    const increaseCounterBad = () => {
        setBad(bad+1);
    }
    const increaseCounterGood = () => {
        console.log("zebi")
        setGood(good+1);
    }
    
    const exposedValue = {
        good,
        ok,
        bad,
        increaseCounterOk,
        increaseCounterBad,
        increaseCounterGood
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>    
}
    
export {    
    Context,
    ProviderWrapper,    
}

