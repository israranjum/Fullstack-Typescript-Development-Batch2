import { PlayButtonProps } from "../../Utils/interface";
import { useState } from "react";

const PlayButton = ({ children, onPlay, onPause }: PlayButtonProps) => {
  const [playing, setPlaying] = useState(false);

  // let playing = false 
function handleClick() {
  if(playing){
    onPause();
  }
  else{
    onPlay();
  }
  setPlaying(!playing);
}


  return <button onClick={handleClick}>{children}
  <span>{playing ? " ⏸️" : " ▶️"} </span>
  </button>;
};

export default PlayButton;
