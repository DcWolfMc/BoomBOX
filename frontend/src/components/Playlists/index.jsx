import { Link } from "react-router-dom";
import playlists from "../../assets/js/dados.js";
const PlaylistsExhibit = () => {
    let listaUnitaria = playlists.map((p) =>{
        return(
            <ul className="">
                <li className="bordaA3"><Link to ={`/playlists/+${p.id}`}><img src={p.capa} width="20%" height="30%"/></Link></li>
                <li className="bordaA3"><Link to ={`/playlists/+${p.id}`}><h3>{p.nome}</h3></Link></li>
                <li className="bordaA3"><h4>{p.artista}</h4></li>
            </ul>

        )
    })
    return(
    <div className="">
        {listaUnitaria}
    </div>);
}

export default PlaylistsExhibit;