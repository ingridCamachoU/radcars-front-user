import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { endPoints } from '../../services/endPoints/endPoints';
import LayoutBase from '../../layout/LayoutBase';
import Loading from '../../components/Loading';
import CardProduct from '../../components/card/CardProduct';
import { marksCars, settings } from '../../utils/const';
import flayerHome from '../../assets/iconHome/flayer-home.svg';
import flayerHomeMobile from '../../assets/iconHome/flayer-home-mobile.svg';
import flayer1 from '../../assets/iconHome/flayer1.svg';

const HomeIndex = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = endPoints.products.getProducts;
    const marks = marksCars;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(url);
                const limitedProducts = response.data.data.slice(0, 8);
                setProducts(limitedProducts);
                setLoading(false);
            } catch (error) {
                console.error(
                    'Error al obtener los productos desde la API:',
                    error
                );
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <LayoutBase>
            <div className="w-full items-center flex flex-col">
                <picture>
                    <source
                        srcSet={flayerHomeMobile}
                        media="(max-width:640px)"
                    />
                    <img src={flayerHome} alt="postPage" />
                </picture>

                <h3 className="text-xl text-text-gray font-bold mt-8 ml-10 w-full max-w-screen-xl">
                    Marcas de Vehículos
                </h3>
                <div className="w-full max-w-screen-xl">
                    <section className="w-full bg-gray-400 py-10 px-10 my-8">
                        <Slider {...settings}>
                            {marks.map((mark) => (
                                <div
                                    className="p-4 flex flex-col items-center shadow-sm hover:shadow-md border border-gray-100 bg-white"
                                    key={mark.id}
                                >
                                    <picture className="w-full flex items-center justify-center">
                                        <img
                                            src={mark.img}
                                            alt={mark.name}
                                            className="max-h-24 object-contain my-2"
                                        />
                                    </picture>
                                </div>
                            ))}
                        </Slider>
                    </section>
                    <picture className="flex pt-6">
                        <img src={flayer1} alt="postPage" />
                    </picture>
                </div>

                <section>
                    <div className="w-full max-w-screen-xl">
                        {products?.length > 0 ? (
                            <section className="grid md:grid-cols-4 lg:gap-8 gap-6 px-8 mx-8 my-12 py-4 sm:grid-cols-3 grid-cols-1">
                                {products.map((product) => (
                                    <Link
                                        key={product.id}
                                        to={`/productos/${product.id}`}
                                        state={product}
                                    >
                                        <CardProduct {...product} />
                                    </Link>
                                ))}
                            </section>
                        ) : (
                            <div className="w-full flex justify-center items-center mt-10">
                                No hay coincidencias
                            </div>
                        )}
                    </div>
                    <div className="w-full flex justify-center">
                        <Link
                            className="bg-background-blue text-text-ligth rounded px-6 py-2 text-sm cursor-pointer hover:bg-blue-950"
                            to="productos"
                        >
                            VER MAS
                        </Link>
                    </div>
                </section>
            </div>
        </LayoutBase>
    );
};

export default HomeIndex;
