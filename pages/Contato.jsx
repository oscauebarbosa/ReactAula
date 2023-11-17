import {useParams} from "react-router-dom";

function Contato(){
    const parametros = useParams()

    return (
        <div>
            <h1>Aqui é o contato, {parametros.aa}</h1>
        </div>
    )
}

export default Contato