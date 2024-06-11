import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Loading from './Loading';
import CardProduct from './card/CardProduct';
import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { endPoints } from '../services/endPoints/endPoints';

const Sliders = ({ productId = null, dataProduct = null }) => {
    const urlCategorie = `${endPoints.products.getProducts}?exclude=true&category=${productId}`;
    const { data, loadingData, loading } = useFetch(urlCategorie);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        loadingData();
    }, [urlCategorie]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="w-11/12 m-auto ">
                    {dataProduct ? (
                        <Slider {...settings}>
                            {dataProduct?.data.map((product) => (
                                <Link
                                    key={product?.id}
                                    to={`/productos/${product.id}`}
                                    state={product}
                                >
                                    <CardProduct {...product} />
                                </Link>
                            ))}
                        </Slider>
                    ) : (
                        <>
                            {data?.data?.length > 0 && (
                                <Slider {...settings}>
                                    {data.data.map((product) => (
                                        <Link
                                            key={product?.id}
                                            to={`/productos/${product.id}`}
                                            state={product}
                                        >
                                            <CardProduct {...product} />
                                        </Link>
                                    ))}
                                </Slider>
                            )}
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Sliders;
