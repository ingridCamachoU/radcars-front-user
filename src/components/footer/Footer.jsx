import logoFooter from '../../assets/logoFooter.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <footer className='flex p-2 bg-background-footer text-text-ligth justify-between items-center lg:flex-row flex-col mt-auto'>
            <div className='lg:w-28 w-16 m-2 cursor-pointer' onClick={toggleHome}>
                <img src={logoFooter} alt='logo footer' />
            </div>

            <div className='flex m-2 pl-10'>
                <p className='flex'>©Copyright 2023 C.I  Autopartes Radcars S.A.S    Teléfonos de Contacto: 316 366 0784 3216988321 |  Correo Eletrónico: radcars@hotmail.com | Dirección: Av 6a # 0-95 La Merced, Cúcuta, Norte de Santander |  By Agencia Cavel</p>
            </div>

            <div className='flex gap-2 m-2 items-center lg:pr-24'>
                <a href='https://www.facebook.com/profile.php?id=100063876372180' target='_blank' >
                    <FontAwesomeIcon icon={faFacebook} className='h-8 w-8 hover:text-blue-300 cursor-pointer'/>
                </a>
               
                <a href='https://www.instagram.com/radcarscucuta/' target='_blank'>
                    <FontAwesomeIcon icon={faInstagram} className='h-9 w-9 hover:text-blue-300 cursor-pointer'/>
                </a>
            </div> 
        </footer>
    );
};

export default Footer;
