import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menubg from "../../../assets/menu/banner3.jpg"
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Fork Fable | Our Menu</title>
            </Helmet>
            <Cover bgimg={menubg} title={"Our Menu"} subTitle={"Would you Like to Try Dish"} />

        </div>
    );
};

export default Menu;