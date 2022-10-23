import React from 'react';
import { Context as countersContext } from "context/countersContext";

const Button = ({text}) => {
    //const { ok, incr } = useContext(countersContext )
    return <>
        <button onChange={null}>{text }</button>
    </>;
}

export default Button;
