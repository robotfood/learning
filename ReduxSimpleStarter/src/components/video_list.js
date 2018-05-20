import React from 'react';
import VideoListItem from './video_list_item';

// Functional React component, because it is function based not a Class.
// In this case, propes is an array of videos
const VideoList = (props) => {

    const videoItems = props.videos.map((video) => { 
        return <VideoListItem video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;