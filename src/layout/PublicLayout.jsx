import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';
import Footer from '../components/footer/Footer';
import WhaspBtn from '../components/WhaspBtn';
import UserContextProvider from '../context/UserContext';

const PublicLayout = () => {
    return (
        <UserContextProvider>
            <div className="body">
                <Header />
                <BreadCrumbs />
                <Outlet />
                <WhaspBtn />
                <Footer />
            </div>
        </UserContextProvider>
    );
};

export default PublicLayout;
