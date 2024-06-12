import { createContext, useContext, useEffect, useState } from 'react';
import { endPoints } from '../services/endPoints/endPoints';
import { useFetch } from '../hooks/useFetch';

const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem('shopping')) || []
    );
    const [total, setTotal] = useState(
        JSON.parse(localStorage.getItem('total')) || 0
    );
    const [countProducts, setCountProducts] = useState(
        JSON.parse(localStorage.getItem('count')) || 0
    );

    // search
    const [search, setSearch] = useState('');
    const [urlProduct, setUrlProduct] = useState(
        endPoints.products.getProducts
    );

    //--- Load Data Product---//
    const {
        data: dataProduct,
        loadingData: loadDataProduct,
        error,
        loading,
    } = useFetch(urlProduct);

    useEffect(() => {
        loadDataProduct();
    }, [urlProduct]);

    // Save localStorage
    const saveLocal = () => {
        localStorage.setItem('shopping', JSON.stringify(cart));
    };

    const countLocal = () => {
        localStorage.setItem('count', JSON.stringify(countProducts));
    };

    const totaltLocal = () => {
        localStorage.setItem('total', JSON.stringify(total));
    };

    saveLocal();
    countLocal();
    totaltLocal();

    // add Porduct shopping cart
    const onAddProduct = (product) => {
        const priceProduct = parseInt(product.price);

        setTotal(total + priceProduct);
        setCountProducts(countProducts + 1);

        const itemInCart = cart.find((element) => element.id === product.id);

        if (itemInCart) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...product, quantity: itemInCart.quantity + 1 }
                        : item
                )
            );
            setCountProducts(countProducts + 1);
            setTotal(total + priceProduct);
        } else {
            setCart((prevState) => [
                ...prevState,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };

    // Reduce products from cart
    const decrase = (product) => {
        const productrepeat = cart.find((element) => element.id === product.id);
        const priceProduct = parseInt(product.price);

        setCountProducts(countProducts - 1);
        setTotal(total - priceProduct);
        setCart(
            cart.map((item) =>
                item.id === product.id
                    ? { ...product, quantity: productrepeat.quantity - 1 }
                    : item
            )
        );
    };

    // Remove products from cart
    const deleteProduct = (product) => {
        const foundId = cart.find((element) => element.id === product.id);

        const newCart = cart.filter((element) => {
            return element !== foundId;
        });

        const priceProduct = parseInt(product.price);
        setCountProducts(countProducts - product.quantity);
        setTotal(total - priceProduct * product.quantity);
        setCart(newCart);
    };

    return (
        <UserContext.Provider
            value={{
                cart,
                setCart,
                onAddProduct,
                decrase,
                deleteProduct,
                countProducts,
                total,
                setCountProducts,
                setTotal,

                dataProduct,
                setUrlProduct,
                urlProduct,
                search,
                setSearch,
                loadDataProduct,
                error,
                loading,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);
