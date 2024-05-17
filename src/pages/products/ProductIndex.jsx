import LayoutBase from '../../layout/LayoutBase';
import CardProduct from '../../components/card/CardProduct';
import FilterSearch from './FilterSearch';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

const ProductIndex = () => {

    const { loading, dataProduct, error } = useUserContext();

    return (
        <LayoutBase>
            <FilterSearch />
            
            {
                loading ?
                <Loading />

                :
                <div className='w-full max-w-screen-xl'>
                    {
                        dataProduct.length > 0 
                        ?   
                            <section className='grid md:grid-cols-4 lg:gap-8 gap-6 px-8 mx-8 my-12 py-4 sm:grid-cols-3 grid-cols-1'>
                                {
                                    dataProduct.map((product) =>(   
                                        <Link key={product.id} to={product.name} state={product}>
                                            <CardProduct 
                                            {...product}
                                            />
                                        </Link>
                                    ))
                                }     
                            </section> 
                        :
                            <div className='w-full flex justify-center items-center mt-10'>No hay coincidencias</div>
                    }
                    </div>
            }
            {
                error !== null 
                ? alert('Error de conexión', 'error')
                : null
            }

        </LayoutBase>
    );
};

export default ProductIndex;
