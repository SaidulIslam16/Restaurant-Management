import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImg, title, subTitle }) => {
    return (
        <>
            {title && <Cover bgimg={coverImg} title={title} subTitle={subTitle} />}
            <div className="grid md:grid-cols-2 gap-8 my-12">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }

            </div>
            <div className="text-center my-6">
                <button className="btn btn-outline border-orange-500 border-0 border-b-4 mt-4 text-orange-500">Order Your Favorite Food</button>
            </div>
        </>
    );
};

export default MenuCategory;