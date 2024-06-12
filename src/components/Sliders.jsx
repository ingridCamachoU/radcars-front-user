import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from './Loading';
import CardProduct from './card/CardProduct';
import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { endPoints } from '../services/endPoints/endPoints';
import { settings } from '../utils/const';

const Sliders = ({ productId = null, dataProduct = null }) => {
    const urlCategorie = `${endPoints.products.getProducts}?exclude=true&category=${productId}`;
    const { data, loadingData, loading } = useFetch(urlCategorie);
    const setingsConfig = settings;

    useEffect(() => {
        loadingData();
    }, [urlCategorie]);

    const renderSliderContent = (products) => {
        if (!products || !products.length) {
            return null;
        }

        return (
            <Slider {...setingsConfig}>
                {products.map((product) => (
                    <Link
                        key={product?.id}
                        to={`/productos/${product.id}`}
                        state={product}
                    >
                        <CardProduct {...product} />
                    </Link>
                ))}
            </Slider>
        );
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="w-11/12 m-auto">
                    {dataProduct
                        ? renderSliderContent(dataProduct.data)
                        : renderSliderContent(data?.data)}
                </div>
            )}
        </>
    );
};

export default Sliders;
