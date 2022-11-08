import React from 'react';
import { Context as countersContext } from "context/countersContext";

const Button = ({text}) => {
    const {  } = useContext(countersContext);
    return <>
        <button onChange={null}>{text }</button>
    </>;
}

export default Button;
