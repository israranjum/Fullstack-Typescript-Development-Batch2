import Data from "../../Data/Data";
import PlayButton from "../PlayButton/PlayButton";
import AddVideo from "./AddVideo";
import Video from "./Video";
const VideoList = () => {
  

  return (
    <div style={{ marginTop: "10px" }}>
      <div>
        <AddVideo></AddVideo>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px",
        }}
      >
        {Data.map((video, index) => {
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
