const URL = import.meta.env.VITE_BACKEND_URL;
const VERSION = import.meta.env.VITE_BACKEND_URL_VERSION;

export const endPoints = {
    products: {
        getProducts: `${URL}${VERSION}/products/`,
        getSearchProducts: (product) =>
            `${URL}${VERSION}/products/?search=${product}`,
        getDetailProducts: (product) => `${URL}${VERSION}/products/${product}`,
    },
    marks: {
        getMarks: `${URL}${VERSION}/marks/`,
    },
    models: {
        getModels: `${URL}${VERSION}/models/`,
    },
    categories: {
        getCategories: `${URL}${VERSION}/categories/`,
    },
};
