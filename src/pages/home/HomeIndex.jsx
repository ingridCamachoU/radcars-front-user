// import LayoutBase from '../../layout/LayoutBase';

// const vehicleCars = [
//     { name: 'BMW', link: [] },
//     { name: 'Renault', link: [] },
//     { name: 'Ford', link: [] },
//     { name: 'Chevrolet', link: [] },
//     { name: 'Honda', link: [] },
//     { name: 'Hyundai', link: [] },
//     { name: 'Jeep', link: [] },
//     { name: 'kia', link: [] },
//     { name: 'Mazda', link: [] },
//     { name: 'Mercedes', link: [] },
//     { name: 'Nissan', link: [] },
//     { name: 'Suzuki', link: [] },
//     { name: 'Toyota', link: [] },
// ];

// const HomeIndex = () => {
//     return (
//         <LayoutBase>
//             <div className="min-h-full">
//                 <h1>inicio</h1>
//             </div>
//         </LayoutBase>
//     );
// };

// export default HomeIndex;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router
import { endPoints } from '../../services/endPoints/endPoints';
import LayoutBase from '../../layout/LayoutBase';
import Loading from '../../components/Loading';
import CardProduct from '../../components/card/CardProduct';
import { marksCars, settings } from '../../utils/const';
import Slider from 'react-slick';

const HomeIndex = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const setingsConfig = settings;

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
            <section className="w-full bg-background-blue py-10 flex px-6 my-6">
                <Slider {...setingsConfig}></Slider>
            </section>
            <section>
                <div className="w-full max-w-screen-xl">
                    {products?.length > 0 ? (
                        <section className="grid md:grid-cols-4 lg:gap-8 gap-6 px-8 mx-8 my-12 py-4 sm:grid-cols-3 grid-cols-1">
                            {products.map((product) => (
                                <Link
                                    key={product.id}
                                    to={product.id}
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
        </LayoutBase>
    );
};

export default HomeIndex;
