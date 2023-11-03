import ItemPoster from './ItemPoster';
import carr from '../../../assets/iconPage/carr.svg';
import customerSupport from '../../../assets/iconPage/customerSupport.svg';
import security from '../../../assets/iconPage/security.svg';
import warranty from '../../../assets/iconPage/warranty.svg';

const CardPoster = () => {
    return (
        <div className='flex w-full sm:flex-row flex-col'>
            <div className='flex w-full'>
                <ItemPoster imgUrl={carr} name={'envíos nacionales'} title={'Envíos Nacionales'}/>

                <ItemPoster imgUrl={customerSupport} name={'atención al cliente'} title={'Atención al cliente'}/>
            </div>

            <div className='flex w-full'>
                <ItemPoster imgUrl={warranty} name={'productos con garantía'} title={'Productos con garantía'}/>

                <ItemPoster imgUrl={security} name={'compra segura'} title={'Compra segura'}/>
            </div>
        </div>
    );
};

export default CardPoster;
