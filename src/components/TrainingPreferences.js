// Importa la biblioteca React
import React from 'react';
// Importa el hook useFormik de la biblioteca formik
import { useFormik } from 'formik';
// Importa todo el contenido de la biblioteca Yup
import * as Yup from 'yup';

// Define el componente funcional TrainingPreferences que recibe una prop llamada onNext
const TrainingPreferences = ({ onNext }) => {
    // Inicializa el hook useFormik con las configuraciones necesarias
    const formik = useFormik({
        // Define los valores iniciales del formulario
        initialValues: {
            trainingType: [], // Inicialmente, el array de tipos de entrenamiento está vacío
        },
        // Define el esquema de validación usando Yup
        validationSchema: Yup.object({
            // Valida que el array de tipos de entrenamiento tenga al menos un elemento
            trainingType: Yup.array().min(1, 'Seleccione al menos un tipo de entrenamiento'),
        }),
        // Define la función que se ejecuta al enviar el formulario
        onSubmit: (values) => {
            // Llama a la función onNext pasando los valores del formulario
            onNext(values);
        },
    });

    // Define las opciones de entrenamiento disponibles
    const trainingOptions = ['Cardio', 'Fuerza', 'Yoga', 'Pilates'];

    // Retorna el JSX que representa el formulario
    return (
        // Define el formulario y asocia el evento onSubmit con formik.handleSubmit
        <form onSubmit={formik.handleSubmit}>
            <h3>Selecciona tus preferencias de entrenamiento</h3>
            {trainingOptions.map((option) => (
                // Etiqueta para cada checkbox
                <label key={option}>
                    <input
                        type="checkbox"
                        name="trainingType"
                        value={option}
                        onChange={formik.handleChange} // Asocia el evento onChange con formik.handleChange
                    />
                    {option}
                </label>
            ))}
            {formik.errors.trainingType && <div>{formik.errors.trainingType}</div>}
            <button type="submit">Siguiente</button>
        </form>
    );
};

// Exporta el componente TrainingPreferences como el valor por defecto
export default TrainingPreferences;