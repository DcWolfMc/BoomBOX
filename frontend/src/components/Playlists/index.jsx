import { Link } from "react-router-dom";
import playlists from "../../assets/js/dadosPlaylists.js";
const PlaylistsExhibit = () => {
    let listaUnitaria = playlists.map((p) =>{
        return(
            <ul className="playlist-card col-md-3">
                <li className="playlist-card-image "><Link to={`/Playlists/${p.id}`}><img src={p.capa} width="100%" height="100%"/></Link></li>
                <li className="playlist-card-name "><Link to={`/Playlists/${p.id}`} className="playlist-card-name"><h3>{p.nome}</h3></Link></li>
                <li className="playlist-card-artist "><h5>{p.artista}</h5></li>
            </ul>

        )
    })
    return(
    <div className="row row-cols-4">
        {listaUnitaria}
    </div>);
}

export default PlaylistsExhibit;