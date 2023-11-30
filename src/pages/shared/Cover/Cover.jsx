import { Parallax } from 'react-parallax';

const Cover = ({ bgimg, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bgimg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero md:h-[550px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-black py-10 px-16 bg-opacity-50">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;