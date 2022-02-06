import { useCallback, useEffect, useState } from "react";

export default function useLocalStorage(key) {
    const [value, setValue] = useState(null);

    useEffect(() => {
        setValue(localStorage.getItem(key));
    }, [setValue])

    return [value, useCallback(value => {
        localStorage.setItem(key, value)
        setValue(value)
    }, [setValue])]
}
