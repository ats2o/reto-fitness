import './App.css';
import RegistrationForm from './components/RegistrationForm';
// import StyledButton from './components/StyledButton';
// import TrainingPreferences from './components/TrainingPreferences';
// import ContactInfo from './components/ContactInfo';


// Función principal del componente App
function App() {
  // Retorna el JSX que define la estructura del componente
  return (
    // Contenedor principal con la clase CSS "App"
    <div className="App">
      {/* <p>Registro de Datos</p>
      <ContactInfo />
      <p>Contacto</p> */}
      <RegistrationForm />
      {/* <StyledButton />
      <p>Preferencias de Entrenamiento</p>
      <TrainingPreferences /> */}
    </div>
  );
}

// Exporta el componente App como el valor por defecto del módulo
export default App;