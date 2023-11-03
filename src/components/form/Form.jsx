
const Form = () => {
    return (
        <form className='px-6 flex flex-col gap-2 shadow-md border pt-2'>
            <h1 className='my-2 font-bold'>¡Ponte en contacto con nosotros!</h1>

            <div className='flex mb-4 gap-6 justify-center lg:flex-row flex-col w-full'>

                <div className='flex-col flex lg:w-1/2 gap-2 w-full'>
                    <label>Nombre</label>
                    <input 
                        type='text' required
                        className='border border-border-gray rounded p-1 w-full font-light'
                        name='name'
                    />
                </div>

                <div className='flex-col flex lg:w-1/2 w-full gap-2'>
                    <label>Número Celular</label>
                    <input 
                        type='number' required
                        className='border border-border-gray rounded p-1 w-full font-light'
                        name='phone'
                    />
                </div>
            </div>

            <div className='flex-col flex w-full mb-4 gap-2'>
                <label>E-mail</label>
                <input 
                    type='email' required
                    className='border border-border-gray rounded p-1 w-full font-light'
                    name='email'
                />
            </div>
            <div className='flex-col flex w-full gap-2'>
                <label>Mensaje</label>
                <textarea 
                    type='text' required
                    className='border border-border-gray rounded p-1 w-full font-light'
                    name='message'
                />
            </div>    
            <button className='bg-background-blue text-text-ligth w-20 p-1 mb-8 mt-4 hover:bg-background-blueHover'>Enviar</button>  
        </form>
    );
};

export default Form;
