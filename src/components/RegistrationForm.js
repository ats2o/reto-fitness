// Importa React y el hook useState desde la biblioteca de React
import React, { useState } from 'react';
// Importa el componente PersonalData desde el archivo PersonalData.js
import PersonalData from './PersonalData';
// Importa el componente ContactInfo desde el archivo ContactInfo.js
import ContactInfo from './ContactInfo'; // Similar estructura

// Define el componente funcional RegistrationForm
const RegistrationForm = () => {
    // Declara una variable de estado 'step' con su función 'setStep' y la inicializa en 0
    const [step, setStep] = useState(0);
    // Declara una variable de estado 'formData' con su función 'setFormData' y la inicializa como un objeto vacío
    const [formData, setFormData] = useState({});
    // Define la función nextStep que actualiza el estado del formulario y avanza al siguiente paso
    const nextStep = (data) => {
        // Actualiza el estado 'formData' combinando los datos actuales con los nuevos datos
        setFormData({ ...formData, ...data });
        // Incrementa el valor de 'step' en 1 para avanzar al siguiente paso
        setStep(step + 1);
    };
    // Renderiza el componente RegistrationForm
    return (
        <div>
            {/* Si el paso es 0, renderiza el componente PersonalData y pasa la función nextStep como prop */}
            {step === 0 && <PersonalData onNext={nextStep} />}
            {/* Si el paso es 1, renderiza el componente ContactInfo y pasa la función nextStep como prop */}
            {step === 1 && <ContactInfo onNext={nextStep} />}
            {/* Agregar más pasos según sea necesario */}
        </div>
    );
};

// Enviar datos al completar el formulario
const submitForm = async () => {
    const response = await fetch('https://api.example.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });
    // Manejar respuesta
};

// Exporta el componente RegistrationForm como el valor por defecto del módulo
export default RegistrationForm, submitForm;