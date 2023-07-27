import { useEffect, useState } from 'react';

export function useWindowSize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(() => window.innerWidth);
            setHeight(() => window.innerHeight);
        })

        return () => {
            //window.removeEventListener("resize");
        }
    }, []);

    return {width, height};
}