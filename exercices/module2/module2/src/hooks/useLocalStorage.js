import { useState } from 'react';



function useLocalStorage(key, initValue) {
    const [stored, setStored] = useState(initValue);


    const setStoredValue = (value) => {
        localStorage.setItem(key, JSON.stringify(stored + value));
        setStored(stored + value);
    };


    return [stored, setStoredValue];

}


export default useLocalStorage;