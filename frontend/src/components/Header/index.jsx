import logo from '../../assets/img/Spotify-Logo.jpg';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <header role="banner" className="cabecario">
            <div className="divisaodiv">
                <Link to="/"><img src={logo} width="100%" height="100%"/></Link>
                <nav role="navigation" className="navigation">
                    <ul className="ulstyle">
                        <li className="unitlist" style={{}}><Link to="/FAQ" className="bordaA3">Suporte</Link></li>
                        <li role="separator" className="separator" ></li>
                        <li className="unitlist" ><Link to="/Cadastro" className="bordaA3">Inscreva-se</Link></li>
                        <li className="unitlist" ><Link to="/Playlists" className="bordaA3">Free Playlists</Link></li>
                        <li className="unitlist" ><a
                                href="https://accounts.spotify.com/login/?continue=https%3A%2F%2Fopen.spotify.com%2F%3Fl2l%3D1"
                                className="bordaA3">Entrar</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;