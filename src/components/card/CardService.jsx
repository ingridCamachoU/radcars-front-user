
const CardService = ({title, urlImg, altImg}) => {
    return (
        <div className='w-9/12 flex flex-col p-2 shadow-md items-center m-2'>
            <h2 className='text-text-gray font-semibold'>{title}</h2>
            <img 
                src={urlImg} 
                alt={altImg}
                className='p-4 w-8/12'/>
        </div>
    );
};

export default CardService;
