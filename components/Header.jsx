import {Link} from "react-router-dom";

function Header(){
    return (
        <div>
            <h1>LOGO</h1>
            <Link to="/">Home </Link>
            <Link to="/contato">Contato</Link>

        </div>
    )
}

export default Header