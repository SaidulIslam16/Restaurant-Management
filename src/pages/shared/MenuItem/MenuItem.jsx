const MenuItem = ({ item }) => {
    const { name, image, price, recipe, category } = item;
    return (
        <div className="flex items-center space-x-5">
            <img style={{ borderRadius: "0 200px 200px 200px" }} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="text-2xl uppercase">{name}-------</h3>
                <p>{recipe}</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-orange-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;