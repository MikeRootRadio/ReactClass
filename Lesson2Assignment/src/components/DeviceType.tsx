import { useWindowSize } from "../hooks/useWindowSize";

function DeviceType() {
    let {width, height} = useWindowSize();

    function determineCategory(): string {
        if (width <= 576)
            return "X-Small: portrait phones";
        if (width <= 768)
            return "Small: landscape phones";
        if (width <= 992)
            return "Medium: tablets";
        if (width <= 1200)
            return "Large: desktops";
        if (width <= 1400)
            return "X-Large: large desktops";
        
        return "XX-Large: larger desktops";
    }

    return (
        <div id="deviceType">
            <h2>Device Type</h2>
            {determineCategory()}
        </div>
    );
}

export default DeviceType;