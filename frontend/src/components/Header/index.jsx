import logo from '../../assets/img/Spotify-Logo.jpg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Header = (props) => {
    const deslogar = ()=>{
        localStorage.removeItem("usuarioLogado");
        props.update();
    }
    // usuário logado
    
    const login_logout = () =>{
        console.log("Identificando função")
        if(props.usuarioLogado){
            console.log("IsOnline é verdadeiro")
            console.log("usuário logado: " + props.usuarioLogado.nome)
            return(
            <>
            <li className="unitlist" ><Link to="/Perfil" className="bordaA3">{props.usuarioLogado.nome}</Link></li>
            <li className="unitlist"><Link to="#" onClick={deslogar} className="bordaA3">Logout</Link></li>
            </>)
        }else{
            console.log("IsOnline é falso")
            return(
            <>
            <li className="unitlist" ><Link to="/Cadastro" className="bordaA3">Inscreva-se</Link></li>
            <li className="unitlist"><Link to="/Login" className="bordaA3">Login</Link></li>
            </>)
        }
    }

    // Tentando descobrir como eu faço para o sistema perceber a chamada do dados salvos e garantindo que ele consiga
    // não so achar mas garantir que , caso não ache, ele não de erro.
   


    return(
        <header role="banner" className="cabecario">
            <div className="divisaodiv">
                <Link to="/"><img src={logo} width="100%" height="100%"/></Link>
                <nav role="navigation" className="navigation">
                    <ul className="ulstyle">
                        <li className="unitlist" style={{}}><Link to="/FAQ" className="bordaA3">Suporte</Link></li>
                        <li role="separator" className="separator" ></li>
                        <li className="unitlist" ><Link to="/Playlists" className="bordaA3">Free Playlists</Link></li>
                        {login_logout()}
                        <li className="unitlist" >  </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
