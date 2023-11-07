// import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { endPoints } from '../../services/endPoints/endPoints';
import { useFetch } from '../../hooks/useFetch';
import { useUserContext } from '../../context/UserContext';

const initial={
    'category': '',
    'mark': '',
    'model': ''
};

const FilterSearch = () => {

    const { setUrlProduct } = useUserContext();

    const urlCategorie = endPoints.categories.getCategories;
    const urlMark = endPoints.marks.getMarks;
    const urlProduct = endPoints.products.getProducts;

    const [dataModel, setDataModel] = useState([])

    const [category, setCategory] = useState('');
    const [model, setModel] = useState('');
    const [mark, setMark] = useState('');
    const [urlFilter, setUrlFilter] = useState('')
    const [modifUrl, setModifUrl] = useState(initial);

    const handleCategorie = (e) => {
        setCategory(e.target.value);
        setUrlFilter(`${urlProduct}?exclude=true&category=${e.target.value}`)
        setModifUrl({
            ...modifUrl, 
            [e.target.name]: e.target.value,
        });
    };

    const handleMark = (e) => {
        setMark(e.target.value);
        const idMark = parseInt(e.target.value)
        const modeloByMark = dataMark.filter(mark => mark.id === (idMark));
        const model = modeloByMark[0].models
        setDataModel(model);
        if (modifUrl.category ===''){
            setUrlFilter(`${urlProduct}?exclude=true&mark=${e.target.value}`)
        }else{
            setUrlFilter(`${urlProduct}?exclude=true&category=${category}&mark=${e.target.value}`)
        }
        setModifUrl({
            ...modifUrl, 
            [e.target.name]: e.target.value,
        });
    };

    const handleModel = (e) => {
        setModel(e.target.value);
        if (modifUrl.category ===''){
            setUrlFilter(`${urlProduct}?exclude=true&mark=${mark}&model=${e.target.value}`)
        }
        else{
            setUrlFilter(`${urlProduct}?exclude=true&category=${category}&mark=${mark}&model=${e.target.value}`)
        }
    };

    const filterBtn = () => {
        setUrlProduct(urlFilter);
    };

    const resetFilter = () => {
        setModifUrl(initial);
        setCategory('');
        setMark('');
        setModel('');
        setUrlProduct(urlProduct);
    };

    //--- Load Data Categorie---//
    const { data:dataCategorie, loadingData:loadDataCategorie } = useFetch(urlCategorie);

    //--- Load Data Mark---//
    const { data:dataMark, loadingData:loadDataMark } = useFetch(urlMark);

    useEffect(() => {
        loadDataCategorie();
        loadDataMark();
    }, [urlCategorie, urlMark]);

  return (
        <div className='bg-background-blue flex w-full justify-around py-2 px-8 mt-2 flex-wrap gap-2'>
            <div className='bg-background-white font-light py-1 px-4  rounded lg:w-1/6 sm:w-1/4 w-full m-1'>
                <select onChange={handleCategorie} value={category} name='category' className='w-full outline-0'>
                    <option>Categoria</option>
                    {dataCategorie.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div className='bg-background-white font-light py-1 px-4  rounded lg:w-1/6 sm:w-1/4 w-full m-1'>
                <select onChange={handleMark} value={mark} name='mark' className='w-full outline-0'>
                    <option>Marca</option>
                    {dataMark.filter(mark => mark.models.length > 0).map(mark => (
                    <option key={mark.id} value={mark.id} >{mark.name} </option>
                    ))}  
                </select>
            </div>

            <div className='bg-background-white font-light py-1 px-4  rounded lg:w-1/6 sm:w-1/4 w-full m-1'>
                <select onChange={handleModel} value={model} name='model' className='w-full outline-0'>
                    <option >Modelo</option>
                    {dataModel.map(model => (
                    <option key={model.id} value={model.id} >{model.name} </option>
                    ))}  
                </select>
            </div>

            <div className='flex gap-4 items-center'>
                <button 
                    className='bg-background-white text-text-blue px-4 py-1 rounded font-medium' 
                    type='submit' onClick={filterBtn}>Filtrar
                </button>
                <button 
                    className='text-text-ligth'
                    type='reset' onClick={resetFilter}>Reset</button>
            </div>
        </div>
    );
}

export default FilterSearch;
