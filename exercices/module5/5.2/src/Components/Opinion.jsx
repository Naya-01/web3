import React from 'react';
import { useContext } from 'react';
import { Context as countersContext } from "context/countersContext";



const Opinion = () => {
    const { opinions, addOpinions, sortedOpinions, incrementVote } = useContext(countersContext);
    const addOpinion = () => {
        let obj = document.getElementById("opinionId");
        addOpinions({
            vote: 1,
            opinion: obj.value
        });
        obj.value = "";
    }

    return <>
        <div>
            {sortedOpinions.map(element =>
                <li key={element.opinion}>Opinion {element.opinion} : {element.vote} <button onClick={(e) => {
                    e.preventDefault();
                    incrementVote(element);
                }}>Vote</button></li>
            )}
            <input type="text" id="opinionId"></input>
            <span><button onClick={addOpinion}>Add opinion</button></span>
        </div>
    </>;
}

export default Opinion;
