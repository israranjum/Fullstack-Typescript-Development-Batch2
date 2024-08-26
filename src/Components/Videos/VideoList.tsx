import { useState } from "react";
import Data from "../../Data/Data";
import PlayButton from "../PlayButton/PlayButton";
import AddVideo from "./AddVideo";
import Video from "./Video";
import { EditAbleVideos, VideoData } from "../../Utils/interface";
const VideoList = () => {
  const [videos, setVideos] = useState(Data);
  const [editableVideo, setEditableVideo] = useState<EditAbleVideos>();

  // Add Video Functions (Single)
  function addVideoData(video: VideoData) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideoData(id: number) {
    console.log(id);
    const updateData = videos.filter((data) => data.id !== id);
    setVideos(updateData);
  }

  function editVideo(id: number) {
    console.log(id);
    setEditableVideo(videos.find((data) => data.id === id));
  }

  function updateVideo(Video: VideoData) {
    const index = videos.findIndex((data) => data.id === Video.id);
    const updateData = [...videos];
    updateData.splice(index, 1, Video);
    setVideos(updateData);
    setEditableVideo(undefined);
  }

  return (
    <div style={{ marginTop: "5px" }}>
      <div>
        <AddVideo addVideoData={addVideoData} updateVideo={updateVideo}
        editableVideo={editableVideo}
        ></AddVideo>
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
              deleteVideoData={deleteVideoData}
              editVideo={editVideo}
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
