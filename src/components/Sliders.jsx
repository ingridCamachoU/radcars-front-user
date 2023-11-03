import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import Loading from './Loading';
import CardProduct from './card/CardProduct';

const Sliders = ({url, data, loadingData, loading}) => {

    const settings = {
        dots: true,
        infinite: true,
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
                    infinite: true,
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
    }, [url]);
    return (
        <>
            {
                loading ?
                    <Loading />
                :
                <div className='w-11/12 m-auto'>
                    {
                        data.length > 0 &&
                            <Slider {...settings}>
                                {      
                                    data.map((product) =>(   
                                        <Link key={product?.id} to={`/productos/${product.name}`} state={product}>
                                            <CardProduct 
                                            {...product}/>
                                        </Link>
                                    ))
                                }
                            </Slider>
                    }
                </div>
            }
        </>
        
    );
};

export default Sliders;
