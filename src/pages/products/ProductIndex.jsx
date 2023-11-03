import LayoutBase from '../../layout/LayoutBase';
import CardProduct from '../../components/card/CardProduct';
import FilterSearch from './FilterSearch';
import { endPoints } from '../../services/endPoints/endPoints';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import CardPoster from '../../components/card/poster/CardPoster';

const ProductIndex = () => {

    const [urlProduct, setUrlProduct] = useState(endPoints.products.getProducts);

    //--- Load Data Product---//
    const { data:dataProduct, loadingData:loadDataProduct, error, loading } = useFetch(urlProduct);

    useEffect(() => {
        loadDataProduct();
    }, [urlProduct]);

    return (
        <LayoutBase>
            <FilterSearch setUrlProduct={setUrlProduct}/>
            
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
                            <div className='w-full flex justify-center items-center'>No hay coincidencias</div>
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
