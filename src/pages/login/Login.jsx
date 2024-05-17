const Login = () => {
    return (
        <div>
            <div>
                <div className="login">
                    <div>
                        <form>
                            <h2>Bievenido</h2>
                            <div>
                                <label>Usuario</label>
                                <input type="text" required />
                            </div>

                            <div>
                                <label>Contraseña</label>
                                <input type="password" required />
                            </div>

                            <div>
                                <input type="submit" />
                            </div>

                            <p>No tienes cuenta?</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
