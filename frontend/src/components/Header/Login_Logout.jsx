/*import { Link } from 'react-router-dom';

function Login_logout(props){
    console.log("Identificando função")
    if(props.isOnline == true){
        console.log("IsOnline é verdadeiro")
        return(
            <div className="btn-group btn-usuario">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User-name
                </button>
                <ul className="dropdown-menu">
                    <li><Link to="/#" className="dropdown-item bordaA3">Perfil</Link></li>
                    <li><Link to="#" className="dropdown-item bordaA3">MyPlaylists</Link></li>
                    <li><hr className="dropdown-divader"/></li>
                    <li><button className="dropdown-item bordaA3" onClick={props.deslogar}>Logout</button></li>
                </ul>
            </div>
        )
    }else{
        console.log("IsOnline é falso")
        return(<Link to="/Login" className="bordaA3">Login</Link>)
    }
}

export default Login_logout;*/