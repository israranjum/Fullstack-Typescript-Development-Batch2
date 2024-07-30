import { useState } from "react";
import Data from "../../Data/Data";
import PlayButton from "../PlayButton/PlayButton";
import AddVideo from "./AddVideo";
import Video from "./Video";
import { VideoData } from "../../Utils/interface";
const VideoList = () => {
  const[videos, setVideos] = useState(Data)


  // Add Video Functions (Single)
  function addVideoData(video: VideoData) {
    setVideos([...videos, {...video, id: videos.length + 1}])

  }
  return (
    <div style={{ marginTop: "5px" }}>
      <div>
        <AddVideo addVideoData={addVideoData}></AddVideo>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px",
        }}
      >
        {videos.map((video, index) => {
          return (
            <Video
              key={index}
              id={video.id}
              title={video.title}
              channel={video.channel}
              views={video.views}
              time={video.time}
              verified={video.verified}
            >
              <PlayButton
                onPlay={() => console.log("Playing..", video.title)}
                onPause={() => console.log("Paused..", video.title)}
              >
                {video.title}
              </PlayButton>
            </Video>
          );
        })}
      </div>
    </div>
  );
};

export default VideoList;
