import { useNavigate } from "react-router-dom";



const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div>
            Ups!
            <br></br>
            Página no encontrada.<br></br>
            Favor de regresar a la página principal.
            <br></br>
            <button onClick={() => navigate('/')} >
                Ir al home
            </button>
        </div>
    )
}

export default NotFound;