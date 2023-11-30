import Cover from "../../shared/Cover/Cover";
import shopBG from '../../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import FoodCart from "../../../components/FoodCart";



const OrderFood = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === "dessert");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Cover bgimg={shopBG} title={"Order Food"} subTitle={"Would you like to Try our Dish"}></Cover>
            <div className="my-16">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="md:grid grid-cols-3 gap-10">
                            {
                                salad?.map(items => <FoodCart key={items._id} items={items}></FoodCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="md:grid grid-cols-3 gap-10">
                            {
                                pizza?.map(items => <FoodCart key={items._id} items={items}></FoodCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="md:grid grid-cols-3 gap-10">
                            {
                                soup?.map(items => <FoodCart key={items._id} items={items}></FoodCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="md:grid grid-cols-3 gap-10">
                            {
                                dessert?.map(items => <FoodCart key={items._id} items={items}></FoodCart>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;