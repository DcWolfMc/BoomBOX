import Header from "./components/Header"
import Home from "./components/Home"
import FAQ from "./components/FAQ"
import Playlists from "./components/Playlists"
import PlaylistsDetails from "./components/PlaylistDetails"
import Footer from "./components/Footer"
import Cadastro from "./components/Cadastro"
import React from "react";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";

  function App() {
  return (
   <Router>
   <Header/>

   <Switch>
      <Route path="/FAQ">
         <FAQ/>
      </Route>
  
      <Route path="/FAQ">
         <FAQ/>
      </Route>

      <Route path="/Playlists/:id">
         <PlaylistsDetails/>
      </Route>

      <Route path="/Playlists">
         <Playlists/>
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
