import { useContext } from "react";
import { DarkMode } from "../context/DarkMode";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs";
import Footer from "../components/footer/Footer";
import WhaspBtn from "../components/WhaspBtn";
import UserContextProvider from "../Context/UserContext"

const PrivateLayout = () => {

    const {darkMode} = useContext(DarkMode); 

    return (
        <UserContextProvider>
            <div className={darkMode ? `body dark` : `body light`}> 
                <Header />
                <BreadCrumbs />
                <Outlet />
                <WhaspBtn />
                <Footer />
            </div>
        </UserContextProvider>
        
    );
};

export default PrivateLayout;
