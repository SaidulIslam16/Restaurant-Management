import FoodCart from "../../../components/FoodCart";

const OrderTab = ({ items }) => {
    return (
        <div className="md:grid grid-cols-3 gap-10">
            {
                items?.map(item => <FoodCart key={item._id} item={item}></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;