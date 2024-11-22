// Importa la librería 'styled-components' para crear componentes con estilos
import styled from 'styled-components';

// Define un componente de botón con estilos personalizados usando 'styled-components'
const StyledButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

// Exporta el componente 'StyledButton' para que pueda ser utilizado en otros archivos
export default StyledButton;