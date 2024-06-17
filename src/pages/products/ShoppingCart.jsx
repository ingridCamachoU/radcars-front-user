import Sliders from '../../components/Sliders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import CardShoppinCart from '../../components/card/CardShoppinCart';
import { useUserContext } from '../../context/UserContext';
import shoppin from '../../assets/shopping.png';
import { converterPrice } from '../../utils/converter';
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
    const { data, loadingData } = useFetch(urlProduct);

    useEffect(() => {
        loadingData();
    }, [urlProduct]);

    return (
        <LayoutBase>
            <div className="w-full max-w-screen-xl">
                <div className="flex w-full my-4 flex-wrap  flex-col justify-center items-center p-4">
                    <div className="w-full m-1">
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
                            <div>
                                <h2 className="font-extrabold w-full my-4 text-2xl text-gray-900">
                                    10% OFF en compras mayores a $200.000 (No
                                    aplica para productos que ya tengan
                                    descuento).
                                </h2>
                                <h3 className="my-8 font-semibold">
                                    Productos:
                                </h3>
                                <div className="border-b">
                                    {cart.map((product) => (
                                        <div key={product.id}>
                                            <CardShoppinCart
                                                cart={cart}
                                                setCart={setCart}
                                                onAddProduct={() =>
                                                    onAddProduct(product)
                                                }
                                                decrase={() => decrase(product)}
                                                deleteProduct={() =>
                                                    deleteProduct(product)
                                                }
                                                {...product}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="text-text-gray w-full px-6 py-4 m-4 items-center flex justify-end">
                        {cart.length === 0 ? (
                            <div></div>
                        ) : (
                            <div className="gap-4 flex flex-col px-4">
                                <h5 className="font-bold text-lg">
                                    Resumen del Pedido
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
                                <button className="bg-green-500 text-text-ligth items-center flex justify-center gap-2 rounded-lg w-50 mt-4 hover:bg-green-600 px-14">
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
                    <Sliders dataProduct={data} />
                </section>
            </div>
        </LayoutBase>
    );
};

export default ShoppingCart;
