import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import NavBar from "../pages/shared/NavBar/NavBar";

const Main = (children) => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')

    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <div className="max-w-screen-xl	mx-auto"><Outlet>{children}</Outlet></div>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;