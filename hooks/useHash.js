import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from "react";

export default function useHash(key) {
    const [value, setValue] = useState(null);
    const path = useRouter().asPath

    useEffect(() => {
        setValue(path.split('#')[1] ?? '');
    }, [])

    return [value, useCallback(value => {
        setValue(value)
    }, [setValue])]
}
