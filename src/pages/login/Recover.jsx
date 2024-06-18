import { Link } from 'react-router-dom';
import LayoutBase from '../../layout/LayoutBase';

const Recover = () => {
    return (
        <LayoutBase>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-full">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        RETABLECE TU CONTRASEÑA
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label className="block font-medium leading-6 text-gray-900">
                                Escribe tu correo electrónico para recuperar la
                                contraseña:
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="px-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <Link
                                to="/login"
                                className="flex w-full justify-center rounded-md px-3 py-1.5 font-semibold leading-6 shadow-sm bg-blue-950 text-text-ligth hover:shadow-xl hover:bg-blue-960 hover:drop-shadow-xl"
                            >
                                RESTABLECE CONTRASEÑA
                            </Link>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-gray-500 flex">
                        <Link
                            to="/login"
                            className="pl-2 font-semibold leading-6 text-blue-800 hover:text-blue-900"
                        >
                            Cancelar
                        </Link>
                    </p>
                </div>
            </div>
        </LayoutBase>
    );
};

export default Recover;
