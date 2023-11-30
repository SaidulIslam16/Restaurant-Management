import FoodCart from "../../../components/FoodCart";

const OrderTab = ({ items }) => {
    return (
        <div className="md:grid grid-cols-3 gap-10">
            {
                items?.map(items => <FoodCart key={items._id} items={items}></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;