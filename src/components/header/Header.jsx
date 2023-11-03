import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, MoonIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import logo from '../../assets/logo.svg';
import { useUserContext } from "../../context/UserContext";

const Header = () => {

    const activesStyle = 'text-indigo-500 bg-background-blue text-text-ligth rounded p-1 text-sm';
    const disabledStyle = 'flex font-medium text-sm';

    const { countProducts } = useUserContext();

    return (
        <header className="flex justify-between items-center bg-gray-100 px-6">
            <div>
                <img src={logo} alt="Logo Radcars" className="md:w-24 md:h-24 w-20 h-20"/>
            </div>

            <nav className="md:flex hidden">
                <ul className="flex gap-8">
                    <li>
                        <NavLink 
                            to=''
                            className={ ({isActive}) =>
                            isActive 
                                ? activesStyle 
                                : disabledStyle
                        }>
                            INICIO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='productos'
                            className={ ({isActive}) =>
                            isActive 
                                ? activesStyle 
                                : disabledStyle
                        }>
                            PRODUCTOS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='servicios'
                            className={ ({isActive}) =>
                            isActive 
                                ? activesStyle 
                                : disabledStyle
                        }>
                            SERVICIO TÉCNICO
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='contactanos'
                            className={ ({isActive}) =>
                            isActive 
                                ? activesStyle 
                                : disabledStyle
                        }>
                            CONTÁCTANOS
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="flex gap-4 items-center">
                <Link to={'shopping'}>
                    <p className="flex justify-center">
                        <ShoppingBagIcon className="h-7 w-7 hover:text-text-blue"/>
                        {
                            countProducts !== 0 &&
                            <span className="absolute text-text-ligth bg-background-blue rounded-3xl h-5 w-5 text-md p-2 items-center flex justify-center mt-3 font-light text-sm">{countProducts}</span>
                        }
                        
                    </p>                
                </Link>
                
                <UserCircleIcon className="h-7 w-7 hover:text-text-blue"/>
                <MoonIcon className="h-7 w-7 hover:text-text-blue"/>
                <Bars3Icon className="h-7 w-7 hover:text-text-blue md:hidden"/>
            </div>
                        
        </header>
    );
};

export default Header;
