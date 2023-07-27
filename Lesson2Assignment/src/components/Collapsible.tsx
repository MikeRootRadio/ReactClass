import { ReactNode } from "react";

type Props = {
    title: string,
    children: ReactNode
}

const Collapsible = (props: Props) => {
    return (
        <div className="collapsible">
            <div className="titleBox">
                <h3>{props.title}</h3>
            </div>
            <div className="contents">
                {props.children}
            </div>
            
        </div>
    );
}

export default Collapsible;