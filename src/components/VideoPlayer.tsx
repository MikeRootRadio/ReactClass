//import { ReactNode } from "react";

type Props = {
    videoUrl: string,
    //indicator: (isPlaying: boolean) => ReactNode
}

const VideoPlayer = (props: Props) => {
    return (
        <>
            <video width="320" height="240" loop>
                <source src={props.videoUrl} type="video/mp4"></source>
            </video>
        </>
    );
}

export default VideoPlayer;