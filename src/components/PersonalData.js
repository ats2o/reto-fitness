// Importa React para poder usar JSX
import React from 'react';
// Importa useFormik de formik para manejar el formulario
import { useFormik } from 'formik';
// Importa Yup para la validación del formulario
import * as Yup from 'yup';

// Define el componente PersonalData que recibe una prop onNext
const PersonalData = ({ onNext }) => {
    // Inicializa useFormik con valores iniciales, esquema de validación y función onSubmit
    const formik = useFormik({
        // Valores iniciales del formulario
        initialValues: {
            firstName: '',
            lastName: '',
        },
        // Esquema de validación usando Yup
        validationSchema: Yup.object({
            // Campo firstName es requerido
            firstName: Yup.string().required('Requerido'),
            // Campo lastName es requerido
            lastName: Yup.string().required('Requerido'),
        }),
        // Función que se ejecuta al enviar el formulario
        onSubmit: (values) => {
            // Llama a la función onNext pasando los valores del formulario
            onNext(values);
        },
    });

    // Retorna el JSX del formulario
    return (
        // Formulario que llama a formik.handleSubmit al enviarse
        <form onSubmit={formik.handleSubmit}>            <input
                type="text"
                name="firstName"
                // Maneja el cambio de valor del campo
                onChange={formik.handleChange}
                // Valor del campo firstName
                value={formik.values.firstName}
                // Placeholder del campo
                placeholder="Nombre"
            />
            {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            <input
                type="text"
                name="lastName"
                // Maneja el cambio de valor del campo
                onChange={formik.handleChange}
                // Valor del campo lastName
                value={formik.values.lastName}
                // Placeholder del campo
                placeholder="Apellido"
            />
            {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
            <button type="submit">Siguiente</button>
        </form>
    );
};

// Exporta el componente PersonalData como el valor por defecto
export default PersonalData;