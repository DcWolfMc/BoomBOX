import { useParams } from "react-router";
import playlists from "../../assets/js/dadosPlaylists";

function PlaylistsDetails() {
  const { id } = useParams();

  const playlist = playlists.find((p) => p.id == id);
  const musics = playlist.musicas.map((m) => {
    return (
      <div>
        <h3 className="bordaA3">{m.nome}</h3>
        <audio controls>
          <source src={m.endereco} type="audio/mpeg" />
        </audio>
      </div>
    );
  });
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
            <h3 className=" bordaA4 ">{playlist.artista}</h3>
          </div>
        </div>
      </div>
      </div>
        {musics}
      </div>
  );
}

export default PlaylistsDetails;


/*
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={playlist.capa} width="20%" height="30%" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h1 className="bordaA3">{playlist.nome}</h1>
      <h2 className="bordaA3">{playlist.artista}</h2>
      </div>
    </div>
  </div>
</div>
*/