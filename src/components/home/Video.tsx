interface videoProp {
    link: string;
}

const Video = (prop: videoProp) => {
    const { link } = prop;
    return (
        <div className="h-full w-full">
            <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                src={link}
            />
        </div>
    );
};

export default Video;
