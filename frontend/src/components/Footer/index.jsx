import logo from '../../assets/img/Spotify-Logo.jpg';
// codigo comentado

const Footer = () => {
    let x = new Date();
    let datatime = x.getUTCDate() +"/"+ (x.getMonth()+1)+"/"+ x.getFullYear();
    return(
        <footer role="banner" className="footerstyle container-fluid">
                <div className="row footer-margin">
                    <div className="footer-content col-md-3">
                        <a href="Main.html" className="bordaA3">
                            <img src={logo} width="50%" height="80%"/>
                        </a>
                    </div>
                    <div className="footer-info col-md-9">
                        <dl className="footer-content col-md-2">
                            <dt>EMPRESA</dt>
                            <dd><a href="#" className="bordaA3">Sobre</a></dd>
                            <dd><a href="#" className="bordaA3">Trabalhe conosco</a></dd>
                        </dl>
                        <dl className="footer-content col-md-2">
                            <dt>COMUNIDADE</dt>
                            <dd><a href="#" className="bordaA3">Publicidade</a></dd>
                            <dd><a href="#" className="bordaA3">Para Artistas</a></dd>
                            <dd><a href="#" className="bordaA3">Investidores</a></dd>
                        </dl>
                        <dl className="footer-content col-md-2">
                            <dt>LINKS ÚTEIS</dt>
                            <dd><a href="#" className="bordaA3">Suporte</a></dd>
                            <dd><a href="#" className="bordaA3">Cadastro</a></dd>
                        </dl>
                        <div className="redes-sociais footer-content col-md-3">
                            <a className="redes-sociais-link-icons bordaA3" href="#">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#" className="redes-sociais-link-icons bordaA3">
                                <i className="bi bi-youtube"></i>
                            </a>
                            <a href="#" className="redes-sociais-link-icons bordaA3">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <h3>{datatime}</h3>
                        </div>
                    </div>
                </div>
            
            </footer>
            
        )
    }

export default Footer;