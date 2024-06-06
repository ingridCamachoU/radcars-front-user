// // import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
// import { useEffect, useState } from 'react';
// import { endPoints } from '../../services/endPoints/endPoints';
// import { useFetch } from '../../hooks/useFetch';
// import { useUserContext } from '../../context/UserContext';

// const initial = {
//     category: '',
//     mark: '',
//     model: '',
// };

// const FilterSearch = () => {
//     const { setUrlProduct } = useUserContext();

//     const urlCategorie = endPoints.categories.getCategories;
//     const urlMark = endPoints.marks.getMarks;
//     const urlProduct = endPoints.products.getProducts;

//     const [dataModel, setDataModel] = useState([]);

//     const [category, setCategory] = useState('');
//     const [model, setModel] = useState('');
//     const [mark, setMark] = useState('');
//     const [urlFilter, setUrlFilter] = useState('');
//     const [modifUrl, setModifUrl] = useState(initial);

//     const handleCategorie = (e) => {
//         setCategory(e.target.value);
//         setUrlFilter(`${urlProduct}?exclude=true&category=${e.target.value}`);
//         setModifUrl({
//             ...modifUrl,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleMark = (e) => {
//         setMark(e.target.value);
//         const idMark = parseInt(e.target.value);
//         const modeloByMark = dataMark.filter((mark) => mark.id === idMark);
//         const model = modeloByMark[0].models;
//         setDataModel(model);
//         if (modifUrl.category === '') {
//             setUrlFilter(`${urlProduct}?exclude=true&mark=${e.target.value}`);
//         } else {
//             setUrlFilter(
//                 `${urlProduct}?exclude=true&category=${category}&mark=${e.target.value}`
//             );
//         }
//         setModifUrl({
//             ...modifUrl,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleModel = (e) => {
//         setModel(e.target.value);
//         if (modifUrl.category === '') {
//             setUrlFilter(
//                 `${urlProduct}?exclude=true&mark=${mark}&model=${e.target.value}`
//             );
//         } else {
//             setUrlFilter(
//                 `${urlProduct}?exclude=true&category=${category}&mark=${mark}&model=${e.target.value}`
//             );
//         }
//     };

//     const filterBtn = () => {
//         setUrlProduct(urlFilter);
//     };

//     const resetFilter = () => {
//         setModifUrl(initial);
//         setCategory('');
//         setMark('');
//         setModel('');
//         setUrlProduct(urlProduct);
//     };

//     //--- Load Data Categorie---//
//     const { data: dataCategorieResponse, loadingData: loadDataCategorie } =
//         useFetch(urlCategorie);

//     //--- Load Data Mark---//
//     const { data: dataMarkResponse, loadingData: loadDataMark } =
//         useFetch(urlMark);

//     const dataCategorie = Array.isArray(dataCategorieResponse?.data)
//         ? dataCategorieResponse.data
//         : [];
//     const dataMark = Array.isArray(dataMarkResponse?.data)
//         ? dataMarkResponse.data
//         : [];

//     useEffect(() => {
//         loadDataCategorie();
//         loadDataMark();
//     }, [urlCategorie, urlMark]);

//     console.log(dataCategorie);

//     return (
//         <div className="bg-background-blue flex w-full justify-around py-2 px-8 mt-2 flex-wrap gap-2">
//             <div className="bg-background-white font-light py-1 px-4  rounded lg:w-1/6 sm:w-1/4 w-full m-1">
//                 <select
//                     onChange={handleCategorie}
//                     value={category}
//                     name="category"
//                     className="w-full outline-0"
//                     disabled={!dataCategorie.length}
//                 >
//                     <option>Categoria</option>
//                     {dataCategorie.length > 0 ? (
//                         dataCategorie.map((category) => (
//                             <option key={category.id} value={category.id}>
//                                 {category.name}
//                             </option>
//                         ))
//                     ) : (
//                         <option>Cargando...</option>
//                     )}
//                 </select>
//             </div>

//             <div className="bg-background-white font-light py-1 px-4  rounded lg:w-1/6 sm:w-1/4 w-full m-1">
//                 <select
//                     onChange={handleMark}
//                     value={mark}
//                     name="mark"
//                     className="w-full outline-0"
//                     disabled={!dataMark.length}
//                 >
//                     <option>Marca</option>
//                     {dataMark.length > 0 ? (
//                         dataMark
//                             .filter((mark) => mark.models.length > 0)
//                             .map((mark) => (
//                                 <option key={mark.id} value={mark.id}>
//                                     {mark.name}
//                                 </option>
//                             ))
//                     ) : (
//                         <option>Cargando...</option>
//                     )}
//                 </select>
//             </div>

//             <div className="bg-background-white font-light py-1 px-4  rounded lg:w-1/6 sm:w-1/4 w-full m-1">
//                 <select
//                     onChange={handleModel}
//                     value={model}
//                     name="model"
//                     className="w-full outline-0"
//                     disabled={!dataModel.length}
//                 >
//                     <option>Modelo</option>
//                     {dataModel.length > 0 ? (
//                         dataModel.map((model) => (
//                             <option key={model.id} value={model.id}>
//                                 {model.name}
//                             </option>
//                         ))
//                     ) : (
//                         <option>Cargando...</option>
//                     )}
//                 </select>
//             </div>

//             <div className="flex gap-4 items-center">
//                 <button
//                     className="bg-background-white text-text-blue px-4 py-1 rounded font-medium"
//                     type="submit"
//                     onClick={filterBtn}
//                 >
//                     Filtrar
//                 </button>
//                 <button
//                     className="text-text-ligth"
//                     type="reset"
//                     onClick={resetFilter}
//                 >
//                     Reset
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FilterSearch;

import React, { useEffect, useState } from 'react';
import { endPoints } from '../../services/endPoints/endPoints';
import { useFetch } from '../../hooks/useFetch';
import { useUserContext } from '../../context/UserContext';

const FilterSearch = () => {
    const { setUrlProduct } = useUserContext();

    const [category, setCategory] = useState('');
    const [mark, setMark] = useState('');
    const [model, setModel] = useState('');
    const [modelsByMark, setModelsByMark] = useState([]);

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setCategory(value);
        setMark('');
        setModel('');
        setModelsByMark([]);
        setUrlProduct(
            `${endPoints.products.getProducts}?exclude=true&category=${value}`
        );
    };

    const handleMarkChange = (e) => {
        const value = parseInt(e.target.value);
        console.log('Marca seleccionada:', value);

        console.log('data model:', dataModel);
        // Filtrar los modelos disponibles para la marca seleccionada
        const filteredModels = dataModel.filter(
            (model) => parseInt(model.mark.id) === value
        );
        console.log('Modelos filtrados por marca:', filteredModels);

        setMark(value);
        setModel('');
        setModelsByMark(filteredModels);

        setUrlProduct(
            `${endPoints.products.getProducts}?exclude=true&category=${category}&mark=${value}`
        );
    };

    const handleModelChange = (e) => {
        const value = e.target.value;
        setModel(value);
        setUrlProduct(
            `${endPoints.products.getProducts}?exclude=true&category=${category}&mark=${mark}&model=${value}`
        );
    };

    const handleResetFilters = () => {
        setCategory('');
        setMark('');
        setModel('');
        setModelsByMark([]);
        setUrlProduct(endPoints.products.getProducts);
    };

    const urlCategorie = endPoints.categories.getCategories;
    const urlMark = endPoints.marks.getMarks;
    const urlModel = endPoints.models.getModels;

    const { data: dataCategorieResponse, loadingData: loadDataCategorie } =
        useFetch(urlCategorie);
    const { data: dataMarkResponse, loadingData: loadDataMark } =
        useFetch(urlMark);
    const { data: dataModelResponse, loadingData: loadDataModel } =
        useFetch(urlModel);

    const dataCategorie = Array.isArray(dataCategorieResponse?.data)
        ? dataCategorieResponse.data
        : [];
    const dataMark = Array.isArray(dataMarkResponse?.data)
        ? dataMarkResponse.data
        : [];
    const dataModel = Array.isArray(dataModelResponse?.data)
        ? dataModelResponse.data
        : [];

    useEffect(() => {
        loadDataCategorie();
        loadDataMark();
        loadDataModel();
        console.log('Data categoría:', dataCategorie);
        console.log('Data marca:', dataMark);
        console.log('Data modelo:', dataModel);
    }, [urlCategorie, urlMark, urlModel]);

    return (
        <div className="bg-background-blue flex w-full justify-around py-2 px-8 mt-2 flex-wrap gap-2">
            <div className="bg-background-white font-light py-1 px-4 rounded lg:w-1/6 sm:w-1/4 w-full m-1">
                <select
                    onChange={handleCategoryChange}
                    value={category}
                    className="w-full outline-0 cursor-pointer"
                    disabled={!dataCategorie.length}
                >
                    <option value="">Categoria</option>
                    {dataCategorie.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="bg-background-white font-light py-1 px-4 rounded lg:w-1/6 sm:w-1/4 w-full m-1">
                <select
                    onChange={handleMarkChange}
                    value={mark}
                    className="w-full outline-0 cursor-pointer"
                    disabled={!dataMark.length}
                >
                    <option value="">Marca</option>
                    {dataMark.map((mark) => (
                        <option key={mark.id} value={mark.id}>
                            {mark.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="bg-background-white font-light py-1 px-4 rounded lg:w-1/6 sm:w-1/4 w-full m-1">
                <select
                    onChange={handleModelChange}
                    value={model}
                    className="w-full outline-0 cursor-pointer"
                    disabled={!modelsByMark.length}
                >
                    <option value="">Modelo</option>
                    {modelsByMark.map((model, index) => (
                        <option key={index} value={model.id}>
                            {model.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex gap-4 items-center">
                <button
                    className="bg-background-white text-text-blue px-4 py-1 rounded font-medium"
                    type="submit"
                >
                    Filtrar
                </button>
                <button
                    className="text-text-ligth"
                    type="reset"
                    onClick={handleResetFilters}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default FilterSearch;
