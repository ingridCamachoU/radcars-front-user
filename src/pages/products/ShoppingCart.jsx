import Sliders from '../../components/Sliders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CardShoppinCart from '../../components/card/CardShoppinCart';
import { useUserContext } from '../../context/UserContext';
import shoppin from '../../assets/shopping.png';
import { converterPrice } from '../../utils/ converter';
import LayoutBase from '../../layout/LayoutBase';
import { endPoints } from '../../services/endPoints/endPoints';
import { useFetch } from '../../hooks/useFetch';
import CardPoster from '../../components/card/poster/CardPoster';
import { useEffect } from 'react';

const ShoppingCart = () => {
    const {
        cart,
        onAddProduct,
        setCart,
        decrase,
        deleteProduct,
        total,
        countProducts,
    } = useUserContext();

    const price = parseInt(total);

    // load data //
    const urlProduct = endPoints.products.getProducts;
    const { data, loadingData, loading } = useFetch(urlProduct);

    useEffect(() => {
        loadingData();
    }, [urlProduct]);

    return (
        <LayoutBase>
            <div className="w-full max-w-screen-xl">
                <div className="flex w-full my-12 flex-wrap lg:flex-row flex-col justify-center items-center bg-slate-50 p-4">
                    <div className="lg:w-8/12 w-11/12 m-1">
                        {cart.length === 0 ? (
                            <div className="bg-white text-text-gray p-1     items-center flex flex-col gap-2">
                                <img
                                    src={shoppin}
                                    alt="shopping"
                                    className="w-40 h-40"
                                />
                                <h3 className="font-bold">
                                    ¡Empieza un carrito de compras!{' '}
                                </h3>
                                <p className="m-2">
                                    Una vez que añadas algo a tu carrito,
                                    aparecerá aquí. ¿Listo para empezar?
                                </p>
                            </div>
                        ) : (
                            cart.map((product) => (
                                <CardShoppinCart
                                    key={product.id}
                                    cart={cart}
                                    setCart={setCart}
                                    onAddProduct={() => onAddProduct(product)}
                                    decrase={() => decrase(product)}
                                    deleteProduct={() => deleteProduct(product)}
                                    {...product}
                                />
                            ))
                        )}
                    </div>

                    <div className="text-text-gray bg-white lg:w-3/12 w-11/12 px-6 py-4 shadow-md m-4 h-72 items-center flex justify-center">
                        {cart.length === 0 ? (
                            <div className="mt-2 text-text-gray">
                                <h5 className="mb-4 font-bold">
                                    Resumen de Compra
                                </h5>
                                <p>
                                    Aquí verás los importes de tu compra una vez
                                    que agregues productos.
                                </p>
                            </div>
                        ) : (
                            <div className="gap-4 flex flex-col px-4">
                                <h5 className="font-bold text-lg">
                                    Resumen del Predido
                                </h5>
                                <p className="font-light">
                                    <span>{countProducts} productos</span>
                                </p>
                                <p className="flex gap-8 mt-2">
                                    <span>Total:</span>{' '}
                                    <span className="font-semibold">
                                        $ {converterPrice(price)}
                                    </span>
                                </p>
                                <button className="bg-green-500 text-text-ligth items-center flex justify-center gap-2 rounded-lg w-50 mt-4 hover:bg-green-600 px-1 ">
                                    Continuar compra
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faWhatsapp}
                                            className="h-8 w-8 text-text-ligth m-1"
                                        />
                                    </span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <CardPoster />

                <h3 className="text-lg text-text-gray font-bold my-8 flex items-center justify-center">
                    También te puede interesar
                </h3>
                <section className="w-full bg-background-blue py-10 flex px-6 my-6">
                    <Sliders
                        url={urlProduct}
                        data={data}
                        loadingData={loadingData}
                        loading={loading}
                    />
                </section>
            </div>
        </LayoutBase>
    );
};

export default ShoppingCart;
