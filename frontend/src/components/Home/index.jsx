const Home = () => {
    return(
        <div className="main-content">
            <div>
                <h1 className="non-ritmo">COLOQUE</h1>
            </div>
            <div>
                <h1 className="ritmo">RITMO</h1>
            </div>
            <div>
                <h1 className="non-ritmo">NA SUA VIDA</h1>
            </div>
            <p className="paragrafo">Com milhares de músicas e shows para você encontrar a sua batida!</p>
            <div className="pai-cadastro">
                <a href="Cadrastro.html" style={{textDecoration: 'none'}}>
                    <div className="cadastre-se">Cadastre já!</div>
                </a>
            </div>
        </div>
    );
}

export default Home;