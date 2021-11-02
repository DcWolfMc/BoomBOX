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

   const [isOnline, setIsOnline] = useState(false);
   const [usuarioLogado, setUsuarioLogado] = useState(JSON.parse(localStorage.getItem("usuarioLogado")));

useEffect(() => {
   if(usuarioLogado != null || usuarioLogado != undefined){
      setIsOnline(true)
   }else{
      setIsOnline(false)
   }
})

  return (
   <Router>
   <Header isOnline={isOnline} setIsOnline={setIsOnline} usuarioLogado={usuarioLogado} setUsuarioLogado={setUsuarioLogado}/>

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
         <Login/>
      </Route>

      <Route path="/Perfil">
         <Perfil isOnline={isOnline} setIsOnline={setIsOnline} usuarioLogado={usuarioLogado} setUsuarioLogado={setUsuarioLogado}/>
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
