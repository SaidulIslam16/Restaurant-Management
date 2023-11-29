import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import NavBar from "../pages/shared/NavBar/NavBar";

const Main = (children) => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-screen-xl	mx-auto"><Outlet>{children}</Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;