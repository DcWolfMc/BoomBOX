import { Link } from "react-router-dom";
import playlists from "../../assets/js/dados.js";
const PlaylistsExhibit = () => {
    let listaUnitaria = playlists.map((p) =>{
        return(
            <ul>
                <li><Link to ={`/playlists/+${p.id}`}><img src={p.capa} width="100%" height="100%"/></Link></li>
                <li><Link to ={`/playlists/+${p.id}`}><h3>{p.nome}</h3></Link></li>
                <li><h4>{p.artista}</h4></li>
            </ul>

        )
    })
    return(
    <div>
        {listaUnitaria}
    </div>);
}

export default PlaylistsExhibit;