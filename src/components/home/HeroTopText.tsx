import Video from "./Video";

const HeroTopText = () => {
    return (
        <div className="pt-3 text-center font-[font1]">
            <div className="text-[9.5vw] leading-[8.5vw] uppercase">
                L'étincelle
            </div>
            <div className="flex items-center justify-center text-[9.5vw] leading-[8.5vw] uppercase">
                qui{" "}
                <div className="-mt-4 h-[6.8vw] w-[16vw] overflow-hidden rounded-full">
                    <Video
                        link={
                            "https://player.vimeo.com/progressive_redirect/playback/899938964/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6a2cb0320d09d02dcfdfa2ad504c89a510e6d93d55e9060b1b55d680fa2e2be9"
                        }
                    />
                </div>{" "}
                génère
            </div>
            <div className="text-[9.5vw] leading-[8.2vw] uppercase">
                la créativité
            </div>
        </div>
    );
};

export default HeroTopText;
