import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
    Bars3Icon,
    MoonIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid';
import logo from '../../assets/logo.svg';
import { useUserContext } from '../../context/UserContext';
import { endPoints } from '../../services/endPoints/endPoints';
import { useContext, useEffect, useState } from 'react';
import { DarkMode } from '../../context/DarkMode';

const Header = () => {
    const { countProducts, search, setSearch, setUrlProduct } =
        useUserContext();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [openToogle, setOpenToogle] = useState(false);

    const activesStyle =
        'bg-background-blue text-text-ligth rounded p-1 text-sm cursor-pointer';
    const disabledStyle = 'flex font-medium text-sm p-1 hover:text-text-blue';

    // search
    const handleSearch = (e) => {
        setSearch(e.target.value);
        setUrlProduct(endPoints.products.getSearchProducts(search));
        if (e.target.value === 0) {
            setSearch('');
        }
    };

    const openOrCloseMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    const menuOpenToogle = () => {
        openToogle ? setOpenToogle(false) : setOpenToogle(true);
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (search === '') {
            //setUrlProduct(endPoints.products.getSearchProducts(search));
        } else {
            navigate('productos');
        }
    }, [search]);

    let Links = [
        { name: 'INICIO', link: '' },
        { name: 'PRODUCTOS', link: 'productos' },
        { name: 'SERVICIO TÉCNICO', link: 'servicios' },
        { name: 'CONTÁCTANOS', link: 'contactanos' },
    ];

    return (
        <header className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex  items-center justify-between bg-white py-2 md:px-10 px-4">
                <div className="flex md:w-11/12  w-full justify-between items-center">
                    <Link to={''}>
                        <img
                            src={logo}
                            alt="Logo Radcars"
                            className="md:w-24 md:h-20 w-20 h-18 pt-2 pl-2"
                        />
                    </Link>

                    <input
                        type="search"
                        placeholder="Search"
                        className="lg:w-5/12 w-8/12 px-4 border py-1 rounded-lg font-light h-10"
                        onChange={handleSearch}
                    />
                </div>

                <div className="flex gap-4 items-center justify-end pb-2 sm:pb-0 md:w-2/12 w-full">
                    <Link to={'shopping'}>
                        <p className="flex justify-center">
                            <ShoppingBagIcon className="h-6 w-6 hover:text-text-blue" />
                            {countProducts !== 0 && (
                                <span className="absolute text-text-ligth bg-background-blue rounded-3xl h-4 w-4 text-md p-1 items-center flex justify-center mt-3 font-light text-sm">
                                    {countProducts}
                                </span>
                            )}
                        </p>
                    </Link>

                    <Link to={'login'}>
                        <UserCircleIcon className="h-6 w-6 hover:text-text-blue " />
                    </Link>

                    {!isOpenMenu ? (
                        <Bars3Icon
                            onClick={openOrCloseMenu}
                            className="h-6 w-6 hover:text-text-blue md:hidden duration-500 cursor-pointer"
                        />
                    ) : (
                        <XMarkIcon
                            onClick={openOrCloseMenu}
                            className="h-6 w-6 hover:text-text-blue md:hidden duration-500 transition-all cursor-pointer"
                        />
                    )}
                </div>
            </div>
            <nav>
                <ul
                    className={`md:flex md:items-center pb-4 absolute md:static bg-slate-50 md:z-auto z-[-1] left-0 w-full md:w-full pt-2 md:justify-center md:pb-4 md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        isOpenMenu ? 'top-20 shadow-md' : 'top-[-490px]'
                    }`}
                >
                    {Links.map((link) => (
                        <li
                            key={link.name}
                            className="md:ml-8 text-xl md:my-0 my-7 cursor-pointer"
                        >
                            <NavLink
                                to={link.link}
                                onClick={openOrCloseMenu}
                                className={({ isActive }) =>
                                    isActive ? activesStyle : disabledStyle
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div
                    onClick={openOrCloseMenu}
                    className={`${
                        isOpenMenu &&
                        'bg-slate-300 relative min-h-screen sm:top-68 top-64 md:top-0 opacity-0'
                    }`}
                ></div>
            </nav>
        </header>
    );
};

export default Header;
