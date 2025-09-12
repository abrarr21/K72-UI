import HeroBottomText from "../components/home/HeroBottomText";
import HeroTopText from "../components/home/HeroTopText";
import Video from "../components/home/Video";

const Home = () => {
    return (
        <div>
            <div className="fixed h-screen w-screen">
                <Video
                    link={
                        "https://player.vimeo.com/progressive_redirect/playback/899938964/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6a2cb0320d09d02dcfdfa2ad504c89a510e6d93d55e9060b1b55d680fa2e2be9"
                    }
                />
            </div>
            <div className="relative flex h-screen w-screen flex-col justify-between">
                <HeroTopText />
                <HeroBottomText />
            </div>
        </div>
    );
};

export default Home;
