import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import LayoutBase from '../../layout/LayoutBase';
import contactsPage from '../../assets/contactUs/contacts-page.svg';
import contactsPageMovil from '../../assets/contactUs/contacts-page-movil.svg';
import contactsPageMovilPage from '../../assets/contactUs/contacts-page-movilPage.svg';
import menContacts from '../../assets/contactUs/menContacts.svg';
import Form from '../../components/form/Form';

const ContacUsIndex = () => {

    return (
        <LayoutBase>
            <div className='max-w-screen-xl'>
                <picture>
                    <source srcSet={contactsPageMovilPage} media='(max-width:640px)'/>
                    <img 
                        src={contactsPage} 
                        alt='postPage'
                        />
                </picture>
                
                <section className='w-full flex lg:flex-row flex-col mt-8 p-2 gap-6'>
                    <div className='lg:w-2/4 w-full justify-center flex flex-col gap-2 sm:px-6 px-1'>
                        <div className='w-full flex items-center justify-center'>
                            <img 
                            src={menContacts} 
                            alt='post contact'
                            className='md:w-8/12 w-full lg:w-full'/>
                        </div>
                    
                        <div className='mt-4 flex gap-2 flex-col'>
                            <p> 
                                <span className='font-light flex items-center gap-2'><MapPinIcon className='h-4 w-4 text-text-blue'/>Nuestros Punto de Venta:</span>
                                <span className='font-light'>Av 6a # 0-95 La Merced, Cúcuta, Norte de Santander.</span>
                            </p>
                            <p> 
                                <span className='font-light flex items-center gap-2'><EnvelopeIcon className='h-4 w-4 text-text-blue'/>Correo Electrónico:</span>
                                <span className='font-light'>radcars@hotmail.com</span>
                            </p>
                            <p> 
                                <span className='font-light flex items-center gap-2'><PhoneIcon className='h-4 w-4 text-text-blue'/>Atención al Cliente</span>
                                <span className='font-light'>316 366 0784/ 3216988321</span>
                            </p> 
                        </div>
                    </div>

                    <div className='lg:w-2/4 w-full sm:px-6 px-1'>
                        <Form />
                        <div className='flex flex-col mt-8 gap-2'>
                            <p className='font-semibold mb-2'>Nuestro Horario</p>
                            <p className='font-light'>Lunes a Viernes de 8:00am a 6:00pm</p>
                            <p className='font-light'>Sabado de 8:00am a 2:00pm</p>
                            <p className='font-light'>Domingo y festivos cerrado</p>
                        </div>
                    </div>

                </section>

                <section className='w-full flex mb-12 flex-col'>
                    <h2 className='font-semibold m-4 px-2 text-text-blue text-lg'>Ubicación</h2>
                    <div className='w-full flex items-center justify-center'>
                        <iframe className='w-full h-80' title={'Maps'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15808.130561075943!2d-72.5128135883911!3d7.8916540415040055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645d459ed76c7%3A0x27db1d19ad3414b!2sRADIADORES%20GABRIEL-%20RADCARS!5e0!3m2!1ses!2sco!4v1689368657114!5m2!1ses!2sco" loading="lazy" ></iframe>
                    </div>
                </section>
            </div>
        </LayoutBase>
    );
};

export default ContacUsIndex;
