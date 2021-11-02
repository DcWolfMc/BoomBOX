import { useState } from "react";
import usuario from "../../assets/js/dadosCadastro";

const Perfil = (props) =>{
const id = props.usuarioLogado.id;
const [email , setEmail] = useState('')
const [password , setPassword] = useState('');
const [name , setName] = useState('');
 
  function handleSubmit(e){
    e.preventDefault();
    const db = `http://localhost:3001/usuarios/?id=${id}`
    axios.put(db).then((response) => {
        usuario.push({
        email: email,
        password: password,
        nome: name
      });
      console.log("Passou");
    }    
    );
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