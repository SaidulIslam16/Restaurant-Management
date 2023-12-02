const FoodCart = ({ item }) => {

    const { name, image, price, recipe } = item;

    const handleAddToCart = item => {
        console.log(item);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-6 top-4 bg-black text-white text-xl font-bold">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-orange-500 border-0 border-b-4 mt-4 text-orange-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;