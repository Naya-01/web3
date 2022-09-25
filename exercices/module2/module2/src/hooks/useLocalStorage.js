import { useState } from 'react';



function useLocalStorage(key, initValue) {
    const [stored, setStored] = useState(() => {
        const value = localStorage.getItem('counter');
        return value ? JSON.parse(value) : initValue;
    });


    const setStoredValue = (value) => {
        localStorage.setItem(key, JSON.stringify(stored + value));
        setStored(stored + value);
    };


    return [stored, setStoredValue];

}


export default useLocalStorage;