// src/components/TrainingPreferences.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TrainingPreferences = ({ onNext }) => {
    const formik = useFormik({
        initialValues: {
            trainingType: [],
        },
        validationSchema: Yup.object({
            trainingType: Yup.array().min(1, 'Seleccione al menos un tipo de entrenamiento'),
        }),
        onSubmit: (values) => {
            onNext(values);
        },
    });

    const trainingOptions = ['Cardio', 'Fuerza', 'Yoga', 'Pilates'];

    return (
        <form onSubmit={formik.handleSubmit}>
            <h3>Selecciona tus preferencias de entrenamiento</h3>
            {trainingOptions.map((option) => (
                <label key={option}>
                    <input
                        type="checkbox"
                        name="trainingType"
                        value={option}
                        onChange={formik.handleChange}
                    />
                    {option}
                </label>
            ))}
            {formik.errors.trainingType && <div>{formik.errors.trainingType}</div>}
            <button type="submit">Siguiente</button>
        </form>
    );
};

export default TrainingPreferences;