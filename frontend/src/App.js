import Header from "./components/Header"
import Home from "./components/Home"
import FAQ from "./components/FAQ"
import Perfil from "./components/Perfil"
import Playlists from "./components/Playlists"
import PlaylistsDetails from "./components/PlaylistDetails"
import Footer from "./components/Footer"
import Cadastro from "./components/Cadastro"
import Login from "./components/Login"
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";


  function App() {
   const update = () => {
      setUsuarioLogado(JSON.parse(localStorage.getItem("usuarioLogado")));
      console.log("upload chamado")
   }
   const [usuarioLogado, setUsuarioLogado] = useState(null);

/*useEffect(() => {
   console.log("chamada do UseEfect");
   if(usuarioLogado != null || usuarioLogado != undefined){
      setIsOnline(true)
      console.log("setIsOnline = true");
   }else{
      setIsOnline(false)
      console.log("setIsOnline = false");
   }
})*/

  return (
   <Router>
   <Header update={update} usuarioLogado={usuarioLogado} setUsuarioLogado={setUsuarioLogado}/>

   <Switch>
  
      <Route path="/FAQ">
         <FAQ/>
      </Route>

      <Route path="/Playlists/:id">
         <PlaylistsDetails/>
      </Route>

      <Route path="/Playlists">
         <Playlists/>
      </Route>

      <Route path="/Login">
         <Login update={update}/>
      </Route>

      <Route path="/Perfil">
         <Perfil usuarioLogado={usuarioLogado} setUsuarioLogado={setUsuarioLogado}/>
      </Route>

      <Route path="/Cadastro">
         <Cadastro/>
      </Route>

      <Route path="/">
         <Home/>
       </Route>
   </Switch>
   
   <Footer/>
   </Router>
  );
}

export default App;
