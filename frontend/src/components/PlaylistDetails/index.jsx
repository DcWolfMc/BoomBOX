import { useParams } from "react-router";
import playlists from "../../assets/js/dadosPlaylists";

function PlaylistsDetails() {
  const { id } = useParams();

  const playlist = playlists.find((p) => p.id == id);
  const musics = playlist.musicas.map((m) => {
    return (
      <audio controls>
        <source src={m.endereco} type="audio/mpeg" />
      </audio>
    );
  });
  return (
    <div>
      <div>
        <img src={playlist.capa} width="20%" height="30%" />
        <h1>{playlist.nome}</h1>
        <h2>{playlist.artista}</h2>
      </div>
      {musics}
    </div>
  );
}

export default PlaylistsDetails;
