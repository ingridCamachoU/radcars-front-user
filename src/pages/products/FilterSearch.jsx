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

        const filteredModels = dataModel.filter(
            (model) => parseInt(model.mark.id) === value
        );
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
