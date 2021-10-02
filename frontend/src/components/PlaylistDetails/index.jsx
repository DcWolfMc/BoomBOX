import { useParams } from "react-router"
import playlists from "../../assets/js/dados";


function PlaylistsDetails(){
    const { id } = useParams();
    
    const playlist = playlists.find((p)=> p.id == id) 
    const musics = playlist.musicas.map((m) =>{
        return(
                <li>
                <audio controls>
                    <source src={m.endereco} type="audio/mpeg"/>
                </audio>
                </li>
        )
    })
    return(
        <div>
            <div>
                <img src={playlist.capa} width="100%" height="100%"/>
                <h1>{playlist.nome}</h1>
                <h2>{playlist.artista}</h2>
            </div>
            <ul>
                {musics}
            </ul>
        </div>
    )
}