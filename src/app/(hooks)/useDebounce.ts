import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 400): T {

    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
        const id = setInterval(() => setDebounce(value), delay)
        return () => clearInterval(id)
    }, [value, delay])

    return debounce
}