import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { converterPrice } from '../../utils/converter';
import sinImagen from '../../assets/sin-imagen.png';
import { useUserContext } from '../../context/UserContext';

const CardProduct = (product) => {
    const { onAddProduct, cart, deleteProduct } = useUserContext();

    const addShopping = (e, product) => {
        e.preventDefault();
        onAddProduct(product);
    };

    const deleteShopping = (e) => {
        e.preventDefault();
        cart.some((item) => {
            if (item.id === product?.id) {
                deleteProduct(item);
            }
        });
    };

    const price = parseInt(product?.price);

    return (
        <div className="w-70 p-4 gap-4 flex flex-col shadow-sm hover:shadow-md border border-gray-100 bg-white">
            <picture className="w-full flex items-center justify-center">
                <img
                    src={
                        product?.images.length > 0 ? product?.images : sinImagen
                    }
                    alt={product?.name}
                    className="h-32 w-40"
                />
            </picture>
            <h3>{product?.name}</h3>
            <p className="text-gray-500 font-semibold">
                {product?.mark_model.mark.name} ({product?.mark_model.name})
            </p>
            <p className="flex justify-between">
                <span className="font-bold text-lg">
                    $ {converterPrice(price)}
                </span>
                {cart.some((item) => item.id === product?.id) ? (
                    <span className="pr-4" onClick={(e) => deleteShopping(e)}>
                        <ShoppingBagIcon className="h-5 w-5 text-text-blue hover:text-text-gray active:scale-95 " />
                    </span>
                ) : (
                    <span
                        className="pr-4"
                        onClick={(e) => addShopping(e, product)}
                    >
                        <ShoppingBagIcon className="h-5 w-5  hover:text-text-blue active:scale-95" />
                    </span>
                )}
            </p>
        </div>
    );
};

export default CardProduct;
