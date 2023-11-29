import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"Check it Out"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className="md:flex space-x-5 items-center">
                <img className="w-[500px]" src={featuredImg} alt="" />
                <div>
                    <h4 className="text-2xl">March 20, 2023</h4>
                    <h4 className="text-2xl">WHERE CAN I GET SOME?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;