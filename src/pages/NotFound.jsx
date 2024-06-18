import notFound from '../assets/notFound.svg';
import LayoutBase from '../layout/LayoutBase';
const NotFound = () => {
    return (
        <LayoutBase>
            <div className="max-w-screen-xl w-full">
                <img src={notFound} alt="Not Found" />
            </div>
        </LayoutBase>
    );
};

export default NotFound;
