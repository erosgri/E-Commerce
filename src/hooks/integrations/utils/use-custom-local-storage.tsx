import { useState } from "react";


export function useCustomLocalStorage<T>(key: string, intitialvalue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : intitialvalue;
        } catch {

            return intitialvalue;
            
        }
    });

    const setValue = (value: T) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    };

    const removeValue = () => {
        setStoredValue(intitialvalue);
        window.localStorage.removeItem(key);
    };

    return [storedValue, setValue, removeValue] as const;
}