export interface VideoData {
    title: string;
    views: string;
    time: string;
    channel: string;
    id: number;
    verified: boolean;

}

export interface VideoProps extends VideoData {
    children: React.ReactNode
}

export interface PlayButtonProps{
    children: React.ReactNode
    onPlay: () => void
    onPause: () => void
}