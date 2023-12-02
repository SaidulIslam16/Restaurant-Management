import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaCalendarAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import useCart from "../hooks/useCart";


const Dashboard = () => {

    const [cart] = useCart();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mx-10 mt-16">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  text-white">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashboard/home'><IoMdHome />User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservation'><FaCalendarAlt />Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/payment-history'><FaWallet />Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart />My Cart <div className="badge badge-secondary">+{cart?.length || 0}</div></NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><IoMdHome />Home</NavLink></li>
                    <li><NavLink to='/menu'><MdMenuBook />Our Menu</NavLink></li>
                    <li><NavLink to='/orderfood/salad'><BsShop />Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;