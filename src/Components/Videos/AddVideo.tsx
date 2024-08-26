import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AddVideoProps, VideoData } from "../../Utils/interface";

// define initial value for Add Video State
const initialValue: VideoData = {
  id: 6,
  title: "",
  channel: "",
  views: "",
  time: "1 year ago",
  verified: true,
};
const AddVideo = ({ addVideoData, editableVideo, updateVideo }: AddVideoProps) => {
  // Add Video State
  const [video, setVideo] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  //     Add Video Handler
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    }else{
      addVideoData(video);
    }
    setVideo(initialValue);
  }

  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);


  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          value={video.title}
          placeholder="Enter Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="views"
          value={video.views}
          placeholder="Enter Views"
          onChange={handleChange}
        />
        <input
          type="text"
          name="channel"
          value={video.channel}
          onChange={handleChange}
          placeholder="Enter Channel"
        />

        <button onClick={handleSubmit}>{editableVideo ? "Edit" : "Add"} Video</button>
      </form>
    </div>
  );
};

export default AddVideo;
