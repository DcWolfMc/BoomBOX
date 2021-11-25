import { useState } from "react";
//import usuario from "../../assets/js/dadosCadastro";
import axios from "axios";
import { useHistory } from "react-router";
const Perfil = (props) =>{
const id = props.usuarioLogado.id;
console.log(id)
const [perfilUpdate, setPerfilUpdate] = useState(props.usuarioLogado)
console.log(perfilUpdate);
console.log(perfilUpdate.nome)
const [email , setEmail] = useState('')
const [password , setPassword] = useState('');
const [name , setName] = useState('');
const history = useHistory()

  function handleSubmit(e){
    e.preventDefault();
    const db = `http://localhost:3001/usuarios/${id}`
    if(name != perfilUpdate.nome != null != ""){
      perfilUpdate.nome = name
      console.log(perfilUpdate.nome)
    }
    if(email != perfilUpdate.email != null != ""){
      perfilUpdate.email = email
      console.log(perfilUpdate.email)
    }
    if(password != perfilUpdate.password != null != ""){
      perfilUpdate.password = password
      console.log(perfilUpdate.password)
    }
    axios.put(db,perfilUpdate)
      .then((response) => {
        setPerfilUpdate(response.data);
        console.log("PUT Response.data: ")
        console.log(response.data)
      });
      localStorage.setItem("usuarioLogado", JSON.stringify(perfilUpdate));
      console.log("passou");
      props.update();
      history.push("/");
    }    

    return(
    <div className="container fonte" className="estilofaq">
    <form className="mx-auto" onSubmit={(e) => handleSubmit(e)}>
    <div className="mb-3">
        <label for="text" className="form-label fonte">Change your Nome</label>
        <input type="text" className="form-control fonte" placeholder={props.usuarioLogado.nome} value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label for="Email" className="form-label fonte">Change your Email</label>
        <input type="email" className="form-control fonte" placeholder={props.usuarioLogado.email} value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label fonte">Change your password</label>
        <input type="password" className="form-control fonte" placeholder={props.usuarioLogado.password} id="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type="submit" className="button bordaA3" style={{color: 'black'}}>Confirmar</button>
     
    </form>
    </div>
    );
}


export default Perfil;