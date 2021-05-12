import { useState, useEffect } from 'react';

const getTheme = (key, initialState) => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
        return JSON.parse(storageValue);
    } else return initialState;
};

const usePersistedTheme = ({ key, initialState }) => {
    const [state, setState] = useState(getTheme(key, initialState));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
};

export default usePersistedTheme;
