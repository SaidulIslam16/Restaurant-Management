
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mx-auto my-7 md:w-3/12">
            <p className="text-orange-400 italic">-- {subHeading} --</p>
            <h1 className="text-4xl uppercase border-y-4  py-2 mt-5">{heading}</h1>
        </div>
    );
};

export default SectionTitle;