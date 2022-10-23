import { useState } from "react";
import React from "react";


const Context = React.createContext(null);


const ProviderWrapper = (props) => {


    const [opinions, setOpinions] = useState([{ opinion: 'A', vote: 4 }]);

    const incrementVote = (opinion) => {
        let obj = opinions.filter(element => element.opinion === opinion.opinion)[0];
        obj.vote++;
        let newArray = opinions.filter(element => element !== opinion.opinion);
        newArray.concat(obj);
        setOpinions(newArray);
    }
    const addOpinions = (opinion) => {

        setOpinions(opinions.concat(opinion));
    }

    const sortedOpinions = opinions.sort((a, b) => { return b.vote - a.vote });

    const exposedValue = {
        opinions,
        addOpinions,
        sortedOpinions,
        incrementVote
    }

    return <Context.Provider value={exposedValue}>
        {props.children}
    </Context.Provider>
}

export {
    Context,
    ProviderWrapper,
}

