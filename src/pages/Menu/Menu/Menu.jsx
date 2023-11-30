import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menubg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from '../../../assets/menu/pizza-bg.jpg';
import saladBg from "../../../assets/menu/salad-bg.jpg"
import soupBg from "../../../assets/menu/soup-bg.jpg"

const Menu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === "dessert");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");


    return (
        <div>
            <Helmet>
                <title>Fork Fable | Our Menu</title>
            </Helmet>
            {/* Main Cover */}
            <Cover bgimg={menubg} title={"Our Menu"} subTitle={"Would you Like to Try Dish"} />

            {/* Today Offer Section */}

            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            <MenuCategory items={offered} />

            {/* Desserts Section */}

            <MenuCategory items={dessert} title={"Desserts"} subTitle={"Chose your Dessert from here"} coverImg={dessertBg} />

            {/* Pizza Section */}

            <MenuCategory items={pizza} title={"Pizza"} subTitle={"Chose your Dessert from here"} coverImg={pizzaBg} />

            {/* Salad Section */}

            <MenuCategory items={salad} title={"Salad"} subTitle={"Chose your Dessert from here"} coverImg={saladBg} />

            {/* Soup Section */}

            <MenuCategory items={soup} title={"Soup"} subTitle={"Chose your Dessert from here"} coverImg={soupBg} />

        </div>
    );
};

export default Menu;