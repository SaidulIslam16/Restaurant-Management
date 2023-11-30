import SectionTitle from "../../../components/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular")

    return (
        <section className="my-10">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From Out Menu"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-6">
                <button className="btn btn-outline border-orange-500 border-0 border-b-4 mt-4 text-orange-500">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;