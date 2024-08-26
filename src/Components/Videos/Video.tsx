import { VideoProps } from "../../Utils/interface";
import "./Video.css";

const Video = ({
  id,
  title,
  channel,
  time,
  views,
  verified,
  children,
  deleteVideoData,
  editVideo
}: VideoProps) => {
  return (
    <div className="container">
      <div className="pic">
        <button className="edit" onClick={() => {
          editVideo(id)
        }}>
          Edit
        </button>
        <button className="close" onClick={() => {deleteVideoData(id)}}>
          X
        </button>
        <img
          src={`https://picsum.photos/id/${id}/310/174`}
          alt="abc"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div>{title}</div>
      <div>
        {/* {channel}{verified ? " ✅" : ""} */}
        {channel} {verified && " ✅"}
      </div>
      <div>
        {views} views <span>.</span> {time}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Video;
