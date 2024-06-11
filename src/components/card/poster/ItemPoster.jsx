const ItemPoster = ({ imgUrl, name, title }) => {
    return (
        <p className="w-full items-center flex flex-col gap-2 sm:my-10 my-8">
            <img src={imgUrl} alt={name} className="w-16 h-16" />
            <span>{title}</span>
        </p>
    );
};

export default ItemPoster;
