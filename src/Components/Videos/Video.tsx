import {  VideoProps } from "../../Utils/interface";
import "./Video.css";

const Video = ({ id, title, channel, time, views, verified, children }: VideoProps) => {
  return (
    <div className="container">
      <div className="pic">
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
