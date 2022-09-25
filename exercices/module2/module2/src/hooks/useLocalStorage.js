import { useState } from 'react';



function useLocalStorage(key, initValue) {
    const [stored, setStored] = useState(parseInt(initValue) || 0);


    const setStoredValue = (value) => {
        localStorage.setItem(key, JSON.stringify(stored + parseInt(value)));
        setStored(stored + parseInt(value));
    };


    return [stored, setStoredValue];

}


export default useLocalStorage;