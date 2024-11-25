// Importa React para poder usar JSX
import React from 'react';
// Importa useFormik de formik para manejar formularios
import { useFormik } from 'formik';
// Importa Yup para la validación de esquemas
import * as Yup from 'yup';

// Define el componente ContactInfo que recibe una prop llamada onNext
const ContactInfo = ({ onNext }) => {
    // Inicializa useFormik con valores iniciales, esquema de validación y función de envío
    const formik = useFormik({
        // Valores iniciales del formulario
        initialValues: {
            email: '',
            phone: '',
        },
        // Esquema de validación usando Yup
        validationSchema: Yup.object({
            // Validación para el campo email
            email: Yup.string()
                .email('Correo electrónico inválido') // Mensaje de error si el email no es válido
                .required('Requerido'), // Mensaje de error si el email está vacío
            // Validación para el campo phone
            phone: Yup.string()
                .matches(/^[0-9]+$/, 'El número de teléfono solo puede contener dígitos') // Mensaje de error si el teléfono contiene caracteres no numéricos
                .required('Requerido'), // Mensaje de error si el teléfono está vacío
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
        <form onSubmit={formik.handleSubmit}>
            {/* Campo de entrada para el email */}
            <input
                type="email"
                name="email"
                onChange={formik.handleChange} // Maneja el cambio de valor
                value={formik.values.email} // Valor actual del campo email
                placeholder="Correo Electrónico" // Texto de marcador de posición
                style={{ borderColor: formik.errors.email ? 'red' : 'black' }} // Cambia el color del borde si hay un error
            />
            {/* Muestra el mensaje de error si existe un error en el campo email */}
            {formik.errors.email && <div>{formik.errors.email}</div>}
            {/* Campo de entrada para el teléfono */}
            <input
                type="text"
                name="phone"
                onChange={formik.handleChange} // Maneja el cambio de valor
                value={formik.values.phone} // Valor actual del campo phone
                placeholder="Número de Teléfono" // Texto de marcador de posición
                style={{ borderColor: formik.errors.phone ? 'red' : 'black' }} // Cambia el color del borde si hay un error
            />
            {/* Muestra el mensaje de error si existe un error en el campo phone */}
            {formik.errors.phone && <div>{formik.errors.phone}</div>}
            {/* Botón para enviar el formulario */}
            <button type="submit">Siguiente</button>
        </form>
    );
};

// Exporta el componente ContactInfo como el valor por defecto del módulo
export default ContactInfo;