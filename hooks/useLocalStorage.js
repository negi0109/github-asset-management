import { useCallback, useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue = null) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        var value = localStorage.getItem(key)
        try {
            value = JSON.parse(value)
        } catch {}

        setValue(value === null ? defaultValue : value);
    }, [setValue])

    return [value, useCallback(value => {
        setValue(value)

        if ((typeof value) != "string") value = JSON.stringify(value)
        localStorage.setItem(key, value)
    }, [setValue])]
}
