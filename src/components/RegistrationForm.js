// Importa React y el hook useState desde la biblioteca de React
import React, { useState } from 'react';
// Importa los componentes PersonalData, ContactInfo y TrainingPreferences
import PersonalData from './PersonalData';
import ContactInfo from './ContactInfo';
import TrainingPreferences from './TrainingPreferences';
// Importa la biblioteca styled-components para crear componentes con estilos
import styled from 'styled-components';

// Define un contenedor con estilos usando styled-components
const Container = styled.div`
    padding: 20px;
    max-width: 600px;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
`;

// Define el componente funcional RegistrationForm
const RegistrationForm = () => {
    // Define el estado 'step' para controlar el paso actual del formulario
    const [step, setStep] = useState(0);
    // Define el estado 'formData' para almacenar los datos del formulario
    const [formData, setFormData] = useState({});
    // Define el estado 'message' para mostrar mensajes al usuario
    const [message, setMessage] = useState('');

    // Función para avanzar al siguiente paso del formulario
    const nextStep = (data) => {
        // Actualiza los datos del formulario con los nuevos datos y avanza al siguiente paso
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };

    // Función para enviar el formulario
    const submitForm = async () => {
        try {
            // Realiza una solicitud POST a la API para registrar los datos
            const response = await fetch('https://api.example.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Convierte los datos del formulario a formato JSON y los envía en el cuerpo de la solicitud
                body: JSON.stringify(formData),
            });

            // Verifica si la respuesta no es exitosa y lanza un error si es el caso
            if (!response.ok) {
                throw new Error('Error en el envío de datos');
            }

            // Convierte la respuesta a JSON
            const result = await response.json();
            // Muestra un mensaje de éxito y registra el resultado en la consola
            setMessage('Registro exitoso');
            console.log('Registro exitoso:', result);
        } catch (error) {
            // Muestra un mensaje de error y registra el error en la consola
            setMessage('Error al registrar');
            console.error('Error al enviar los datos:', error);
        }
    };

    // Renderiza el formulario de registro
    return (
        <Container>
            {/* Muestra el componente PersonalData si el paso actual es 0 */}
            {step === 0 && <PersonalData onNext={nextStep} />}
            {/* Muestra el componente ContactInfo si el paso actual es 1 */}
            {step === 1 && <ContactInfo onNext={nextStep} />}
            {/* Muestra el componente TrainingPreferences si el paso actual es 2 */}
            {step === 2 && <TrainingPreferences onNext={nextStep} />}
            {/* Muestra un resumen del registro y un botón para enviar el formulario si el paso actual es 3 */}
            {step === 3 && (
                <div>
                    <h2>Resumen de Registro</h2>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                    <button onClick={submitForm}>Enviar Registro</button>
                </div>
            )}
            {/* Muestra un mensaje si existe alguno */}
            {message && <div>{message}</div>}
        </Container>
    );
};

// Exporta el componente RegistrationForm como el valor por defecto
export default RegistrationForm;