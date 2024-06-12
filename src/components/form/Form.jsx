import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';

const Form = () => {
    const initialForm = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    const [formData, handleChange, setFormData] = useForm(initialForm);

    const [errors, setErrors] = useState({});

    const onValidate = (formData) => {
        let errors = {};
        let regexName = /^([0-9-A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]){2,20}$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexPhone = /^([0-9-A-Za-zÑñÁáÉéÍíÓóÚúÜüs]){5,15}$/;
        let regexMessage = /^.{1,255}$/;

        if (!formData.name.trim()) {
            errors.name = 'El campo "Nombre" no debe ser vacio.';
        } else if (!regexName.test(formData.name)) {
            errors.name = 'El campo "Nombre" es incorrecto.';
        }

        if (!formData.email.trim()) {
            errors.email = 'El campo "Email" no debe ser vacio.';
        } else if (!regexEmail.test(formData.email)) {
            errors.email = 'El campo "Email" es incorrecto.';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'El campo "Celular" no debe ser vacio.';
        } else if (!regexPhone.test(formData.phone)) {
            errors.phone =
                'El campo "Celular" es incorrecto, no puede tener espacios en blanco y debe tener más de 5 caracteres';
        }

        if (!formData.message.trim()) {
            errors.message = 'El campo "Mensaje" no debe ser vacio.';
        } else if (!regexMessage.test(formData.message)) {
            errors.message = 'El campo "Mensaje" es incorrecto.';
        }
        return errors;
    };

    const err = onValidate(formData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(err);

        if (Object.keys(errors).length === 0) {
            try {
                setErrors('');
                const formDataToSend = { ...formData };
                setFormData(initialForm);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Mensaje Enviado',
                    showConfirmButton: false,
                    timer: 1000,
                });

                await fetch('https://formsubmit.co/ajax/injuca28@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        Hola: 'RadCars',
                        Recibiste_un_mensaje_de: formDataToSend.name,
                        Con_email: formDataToSend.email,
                        Numero_celular: `https://wa.me/${formDataToSend.phone}`,
                        Mensaje: formDataToSend.message,
                    }),
                });
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <form
            className="px-6 flex flex-col gap-2 shadow-md border pt-2"
            onSubmit={handleSubmit}
        >
            <h1 className="my-2 font-bold">¡Ponte en contacto con nosotros!</h1>

            <div className="flex mb-4 gap-6 justify-center lg:flex-row flex-col w-full">
                <div className="flex-col flex lg:w-1/2 gap-2 w-full">
                    <label>Nombre</label>
                    <input
                        type="text"
                        required
                        className="border border-border-gray rounded p-1 w-full font-light"
                        name="name"
                        placeholder=" Nombre y apellido"
                        onChange={handleChange}
                        value={formData.name}
                    />
                    {errors.name && (
                        <p className="text-danger">{errors.name}</p>
                    )}
                </div>

                <div className="flex-col flex lg:w-1/2 w-full gap-2">
                    <label>Número Celular</label>
                    <input
                        type="number"
                        required
                        className="border border-border-gray rounded p-1 w-full font-light"
                        name="phone"
                        placeholder=" 303213..."
                        onChange={handleChange}
                        value={formData.phone}
                    />
                    {errors.phone && (
                        <p className="text-danger">{errors.phone}</p>
                    )}
                </div>
            </div>

            <div className="flex-col flex w-full mb-4 gap-2">
                <label>E-mail</label>
                <input
                    type="email"
                    required
                    className="border border-border-gray rounded p-1 w-full font-light"
                    name="email"
                    placeholder=" correo_electronico@gmail.com"
                    onChange={handleChange}
                    value={formData.email}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className="flex-col flex w-full gap-2">
                <label>Mensaje</label>
                <textarea
                    type="text"
                    required
                    className="border border-border-gray rounded p-1 w-full font-light"
                    name="message"
                    placeholder=" Deseo mas información"
                    onChange={handleChange}
                    value={formData.message}
                />
                {errors.message && (
                    <p className="text-danger">{errors.message}</p>
                )}
            </div>
            <button
                className="bg-background-blue text-text-ligth w-20 p-1 mb-8 mt-4 hover:bg-background-blueHover"
                type="submit"
            >
                Enviar
            </button>
        </form>
    );
};

export default Form;
