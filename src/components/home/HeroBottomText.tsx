import { Link } from "react-router-dom";

const HeroBottomText = () => {
    return (
        <div className="mb-3 flex items-center justify-center gap-5 font-[font2]">
            <div className="flex h-24 items-center rounded-full border-3 px-7 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
                <Link to="/projects" className="mt-5 text-[6.3vw]">
                    Projects
                </Link>
            </div>

            <div className="flex h-24 items-center rounded-full border-3 px-6 uppercase hover:border-[#D3FD50] hover:text-[#D3FD50]">
                <Link to="/agence" className="mt-5 text-[6.3vw]">
                    Agence
                </Link>
            </div>
        </div>
    );
};

export default HeroBottomText;
