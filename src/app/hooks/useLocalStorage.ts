import { useState } from "react";

const useLocalStorage = (key: string, initialValue: any): [any, (value: any) => void] => {
    
    if (!window || !window.localStorage) {
        throw new Error('localStorage is not available in this environment');
    }

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    const setValue = (value: any) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error)
        }
    };

    return [storedValue, setValue];
};

export default useLocalStorage