import { useParams } from "react-router";
//import playlists from "../../assets/js/dadosPlaylists";
import axios from "axios";
import{useEffect, useState} from "react";
    


function PlaylistsDetails() {
  const { id } = useParams();

  const db = `http://localhost:3001/playlists/${id}`
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
      axios.get(db).then( (response) => {
        console.log(response.data);
        setPlaylist(response.data);

      });
  }, [])

  const musics = playlist.musicas? playlist.musicas.map((m) => {
    return (
      <div>
        <h3 className="bordaA3">{m.nome}</h3>
        <audio controls>
          <source src={m.endereco} type="audio/mpeg" />
        </audio>
      </div>
    );
  }):"";
  console.log(playlist.musicas) 
  return (
    <div>
      <div className="card mb-3" max-width= "540px">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={playlist.capa} width="100%" height="100%" />
          </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className=" card-title bordaA4 ">{playlist.nome}</h1>
            <h3 className=" bordaA4 ">{playlist.artista} </h3>
          </div>
        </div>
      </div>
      </div>
        {musics}
      </div>
  );
}

export default PlaylistsDetails;