import { useWindowSize } from "../hooks/useWindowSize";

function WindowSizeDisplay() {
    let {width, height} = useWindowSize();

    return (
        <div id="windowSize">
            <h2>Window Size</h2>
            <p>{width} x {height}</p>
        </div>
    );
}

export default WindowSizeDisplay;