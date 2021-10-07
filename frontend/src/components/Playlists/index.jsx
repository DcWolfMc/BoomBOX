import { Link } from "react-router-dom";
import playlists from "../../assets/js/dadosPlaylists.js";
const PlaylistsExhibit = () => {
    let listaUnitaria = playlists.map((p) =>{
        return(
            <ul className="col-md-4">
                <li className="bordaA3"><Link to={`/Playlists/${p.id}`}><img src={p.capa} width="20%" height="30%"/></Link></li>
                <li className="bordaA3"><Link to={`/Playlists/${p.id}`}><h3>{p.nome}</h3></Link></li>
                <li className="bordaA3"><h4>{p.artista}</h4></li>
            </ul>

        )
    })
    return(
    <div className="col-md-12">
        {listaUnitaria}
    </div>);
}

export default PlaylistsExhibit;