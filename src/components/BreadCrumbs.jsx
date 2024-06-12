import { Link, useLocation, useParams } from 'react-router-dom';
import { capitalLetter } from '../utils/converter';

const BreadCrumbs = () => {
    const location = useLocation();

    const breadCrumView = () => {
        const { pathname } = location;
        const pathnames = pathname.split('/').filter((item) => item);

        return (
            <div className="flex gap-1 p-1 font-light pl-6 py-4 md:mt-36 sm:mt-24 mt-28">
                {pathnames.length > 0 ? (
                    <div>
                        <Link to={''} className="hover:text-text-blue">
                            Inicio
                        </Link>
                    </div>
                ) : null}
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames
                        .slice(0, index + 1)
                        .join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <div key={index}>
                            <span className="text-gray-400">/</span> {name}
                        </div>
                    ) : (
                        <div key={index}>
                            <Link
                                to={`${routeTo}`}
                                className="hover:text-text-blue"
                            >
                                <span className="text-gray-400 mr-1 ">/</span>
                                {capitalLetter(name)}
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    };

    return <> {breadCrumView()}</>;
};

export default BreadCrumbs;
