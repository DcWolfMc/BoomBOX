import { useState, } from "react";
//import usuario from "../../assets/js/dadosCadastro";
import axios from "axios";
import { useHistory } from "react-router";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuario, setUsuario] = useState([]);
  const [error, setError] = useState({ 
        dadosInvalidos: "",
        passwordVazia:"",
        emailVazio:""
      });
  const history = useHistory()
  function handleSubmit(e) {
    e.preventDefault();
    const db = `http://localhost:3001/usuarios/?email=${email}`  
    axios.get(db).then((response) => {
        const u = response.data[0];
        setUsuario(u)
        if(email == null || !email || email == undefined){
            setError({ emailVazio: "email Vazia" });
            return
        }else if(password == null || !password || password == undefined){
          setError({ passwordVazia: "Senha Vazia" });
          return
        }else if(u == undefined || u.password !== password){
            setError({ dadosInvalidos: "Dados Invalidos" });
            console.log(u);
            return
        }else{
            localStorage.setItem("usuarioLogado", JSON.stringify(u));
            console.log(u);
            props.update()
            history.push("/");
        }
    }    
    );
  }

  return (
    <div className="container fonte" className="estilofaq">
      <form className="mx-auto" onSubmit={(e) => handleSubmit(e)}>
      {error.dadosInvalidos && (<div className="alert alert-danger" role="alert">{error.dadosInvalidos}</div>)}
        <div className="mb-3">
          <label for="Email" className="form-label fonte">Email address</label>
          <input type="email"className="form-control fonte"placeholder="Enter your email"
            value={email}onChange={(e) => setEmail(e.target.value)}/>
        {error.emailVazio && (<div className="alert alert-danger" role="alert">{error.emailVazio}</div>)}  
        </div>
        <div className="mb-3">
          <label for="password" className="form-label fonte">Password</label>
          <input type="password" className="form-control fonte" placeholder="password"id="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}/>
        {error.passwordVazia && (<div className="alert alert-danger" role="alert">{error.passwordVazia}</div>)}
        </div>
        <div>
          <button type="submit"className="button bordaA3"style={{ color: "black" }}>Logar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
