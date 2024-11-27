// Importa React y el hook useState desde la biblioteca de React
import React, { useState } from 'react';
// Importa los componentes PersonalData, ContactInfo y TrainingPreferences
import PersonalData from './PersonalData';
import ContactInfo from './ContactInfo';
import TrainingPreferences from './TrainingPreferences';
// Importa la biblioteca styled-components para estilos
import styled from 'styled-components';
// Importa el archivo de estilos CSS
import '../Estilos.css';

// Define un contenedor estilizado usando styled-components
const Container = styled.div`
    padding: 10px;
    max-width: 500px;
    margin: auto;
    border: 3px solid #400040;
    border-radius: 10px;
    background-color: #8080c0;
`;

// Define el componente funcional RegistrationForm
const RegistrationForm = () => {
    // Define el estado 'step' para controlar el paso actual del formulario
    const [step, setStep] = useState(0);
    // Define el estado 'formData' para almacenar los datos del formulario
    const [formData, setFormData] = useState({});
    // Define el estado 'message' para mostrar mensajes al usuario
    const [message, setMessage] = useState('');
    // Función para avanzar al siguiente paso y actualizar los datos del formulario
    const nextStep = (data) => {
        setFormData({ ...formData, ...data });
        setStep(step + 1);
    };
    // Función para retroceder al paso anterior
    const prevStep = () => {
        setStep(step - 1);
    };
    // Función para enviar el formulario
    const submitForm = async (datos) => {
        try {
            // Realiza una solicitud POST a la API para registrar los datos
            const response = await fetch('https://api.fitlife.com/registro', { // Ensure this URL is correct and the server is running
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datos),
            });
            // Verifica si la respuesta no es exitosa
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error en el envío de datos: ${errorText}`);
            }
            // Convierte la respuesta a JSON
            const result = await response.json();
            // Muestra un mensaje de éxito
            setMessage('Registro exitoso');
            console.log('Registro exitoso:', result);
        } catch (error) {
            if (error.name === 'TypeError') {
                setMessage('Network error: Failed to fetch');
            } else {
                setMessage('Error al registrar');
            }
            // setMessage('Error al registrar');
            console.error('Error al enviar los datos:', error);
            console.error('Detalles del error:', error.message); // Agrega esta línea para más detalles
        }
    };
    // Renderiza el formulario basado en el paso actual
    return (
        // Contenedor principal del formulario
        <div className="container">
        <h1>Registro de Datos</h1>
        <Container>
            {step === 0 && <PersonalData onNext={nextStep} />}
            {step === 1 && (
                <>
                    <ContactInfo onNext={nextStep} />
                    <button onClick={prevStep}>Atrás</button>
                </>
            )}
            {step === 2 && (
                <>
                    <TrainingPreferences onNext={nextStep} />
                    <button onClick={prevStep}>Atrás</button>
                </>
            )}
            {step === 3 && (
                <div>
                    <h2>Resumen de Registro</h2>
                    <pre>{JSON.stringify(formData, null, 2)}</pre>
                    <button onClick={submitForm}>Enviar Registro</button>
                    <button onClick={prevStep}>Atrás</button>
                </div>
            )}
            {message && <div>{message}</div>}
        </Container>
        </div>
    );
};

// Exporta el componente RegistrationForm como el valor por defecto
export default RegistrationForm;