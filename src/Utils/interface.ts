export interface VideoData {
    title: string;
    views: string;
    time: string;
    channel: string;
    id: number;
    verified: boolean;

}

export interface VideoProps extends VideoData {
    children: React.ReactNode;
    deleteVideoData: (id: number) => void
    editVideo: (id: number) => void
}

export interface PlayButtonProps{
    children: React.ReactNode
    onPlay: () => void
    onPause: () => void
}

export interface AddVideoProps{
    addVideoData: (video: VideoData) => void
    updateVideo: (video: VideoData) => void
    editableVideo?: VideoData
}

export interface EditAbleVideos {
    title: string;
    views: string;
    time: string;
    channel: string;
    id: number;
    verified: boolean;
}