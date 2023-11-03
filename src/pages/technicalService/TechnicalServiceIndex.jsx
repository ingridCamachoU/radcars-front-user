import CardService from '../../components/card/CardService';
import LayoutBase from '../../layout/LayoutBase';
import radiador from '../../assets/serviceTechnical/radiador.svg';
import mecanico from '../../assets/serviceTechnical/mecanico.svg';
import asesoria from '../../assets/serviceTechnical/asesoria.svg';
import posterService from '../../assets/serviceTechnical/posterService.svg';
import { WrenchScrewdriverIcon } from '@heroicons/react/24/solid';

const TechnicalServiceIndex = () => {
    return (
        <LayoutBase>
            <div className='max-w-screen-xl'>
                <section className='w-full flex lg:flex-row flex-col mt-4 p-2 gap-6'>
                    <div className='lg:w-2/4 w-full justify-center flex flex-col gap-2 sm:px-6 px-1'>
                        <h1 className='font-bold text-text-gray text-lg mb-4 pl-2'>Portafolio de Servicios</h1>
                            <CardService title={'Venta y reparación de radiadores'} urlImg={radiador} altImg={'radiador'}/>
                            <CardService title={'Mantenimiento preventivo'} urlImg={mecanico} altImg={'mecanico'}/>
                            <CardService title={'Asesoría personalizada'} urlImg={asesoria} altImg={'asesoria'}/>
                    </div>
                    <div className='lg:w-2/4 w-full flex flex-col sm:px-6 px-1'>
                        <div className='w-full'>
                            <img src={posterService} alt='poster service' />
                        </div>

                        <div className='mt-6 font-light'>
                            <p className='flex gap-2 items-center mb-2 '>
                                <span><WrenchScrewdriverIcon className='h-4 w-4 text-text-blue'/>
                                </span>Reparación y mantenimiento de:
                            </p>
                            <div className='ml-4 mb-4'>
                                <p>-Radiadores</p>
                                <p>-Enfriadores</p>
                                <p>-Secadores</p>
                                <p>-Intercambiadores</p>
                                <p>-Catalizadores</p>
                                <p>-Evaporadores</p>  
                            </div>

                            <p className='flex gap-2 items-center mb-4'>
                                <span><WrenchScrewdriverIcon className='h-4 w-4 text-text-blue'/>
                                </span>Cambio y reparación de partes originales y homologadas.
                            </p>

                            <p className='flex gap-2 items-center mb-4'>
                                <span><WrenchScrewdriverIcon className='h-4 w-4 text-text-blue'/>
                                </span>Diseño y adaptaciones de radiadores.
                            </p>

                            <p className='flex gap-2 items-center mb-4'>
                                <span><WrenchScrewdriverIcon className='h-4 w-4 text-text-blue'/>
                                </span>Fabricación y distribución de tanques troquelados, industriales, súper industriales, panales tropicalizados y corrientes.
                            </p>

                            <p className='flex gap-2 items-center mb-4'>
                                <span><WrenchScrewdriverIcon className='h-4 w-4 text-text-blue'/>
                                </span>Reparación de  condensadores.
                            </p>

                            <p className='flex gap-2 items-center mb-4'>
                                <span><WrenchScrewdriverIcon className='h-4 w-4 text-text-blue'/>
                                </span>Servicio de soldaduras especiales (TIG, MIG, eléctrica y autógena).
                            </p>

                            <p className='flex gap-2 items-center mb-4'>
                                <span><WrenchScrewdriverIcon className='h-4 w-4 text-text-blue'/>
                                </span>Limpieza de sistemas de refrigeración, usando productos amigables con el medio ambiente.
                            </p>
                        </div>          
                    </div>
                </section>
            </div>
        </LayoutBase>
    );
};

export default TechnicalServiceIndex;
