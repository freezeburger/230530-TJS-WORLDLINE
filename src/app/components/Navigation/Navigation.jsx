import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/"> Accueil </Link>
                </li>
                <li>
                    <Link to="/home"> Products </Link>
                </li>
                <li>
                    <Link to="/infos">Infos</Link>
                </li>
            </ul>
        </>
    )
}

export default Navigation;