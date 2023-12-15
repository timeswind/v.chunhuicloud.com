"use client";

import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
    playUrl: string
}

const VideoPlayer = ({ playUrl }: VideoPlayerProps) => {

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    return (
        <div>
            <ReactPlayer
                className='react-player'
                url={playUrl}
                controls
                width='100%'
                pip={true}
                config={{
                    file: {
                        forceHLS: !isSafari,
                        forceDisableHls: isSafari,
                        forceVideo: true,
                        hlsVersion: '0.12.4',
                    }
                }}
            />
        </div>
    );
};

export default VideoPlayer;