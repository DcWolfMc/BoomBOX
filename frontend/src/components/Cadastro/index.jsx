import axios from "axios";
import { useState } from "react";
//import usuario from "../../assets/js/dadosCadastro";

const Cadastro = () =>{

const[usuario, setUsuario] = useState([]);
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [sex , setSex] = useState('');
const [name , setName] = useState('');
const [emailconfirm , setEmailconfirm] = useState('');
const [error , setError] = useState({emaild: ''});
const db = `http://localhost:3001/usuarios/`
  function handleSubmit(e){
    e.preventDefault();
    if(email == emailconfirm){
      axios.post(db, {
        email: email,
        password: password,
        sex: sex,
        nome: name,
        playlists:[{
          
        }]
      }).then((response)=>{setUsuario(response.data)})
      /*usuario.push({
        email: email,
        password: password,
        sex: sex,
        nome: name
      });*/
      console.log(usuario); // log esta atrasado em 1 submit
      setEmail("");
      setPassword("");
      setName("");
      setEmailconfirm("");
      setSex("");
      setError({emaild:"Cadastro realizado com sucesso."})
    }else{
      setError({emaild:'Os e-mails não conferem'})
    }
  }

    return(
    <div className="container fonte" className="estilofaq">
    <form className="mx-auto" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3">
        <label for="Email" className="form-label fonte">Email address</label>
        <input type="email" className="form-control fonte" placeholder="Enter your email"
           value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label for="Email" className="form-label fonte">Confirm Email</label>
        <input type="email" className="form-control fonte" placeholder="Enter your email again"
           value={emailconfirm} onChange={(e) => setEmailconfirm(e.target.value)}/>
           {error.emaild && (<div className="alert alert-danger" role="alert">{error.emaild}</div>)}
        <div id="emailHelp" className="form-text bordaA3">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="password" className="form-label fonte">Password</label>
        <input type="password" className="form-control fonte" placeholder="Create your password" id="Password"
        value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label for="text" className="form-label fonte">What should we call you?</label>
        <input type="text" className="form-control fonte" placeholder="Enter a profile name" value={name} onChange={(e) => setName(e.target.value)}/>
        <div id="nicknameHelp" className="form-text bordaA3">This appear on your profile.</div>
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <select className="form-select fonte" id="floatingSelectGrid" aria-label="Floating label select example">
              <option selected>Month</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>
        <div className="col-md-3">
          <input type="Day" className="form-control fonte" id="floatingInputGrid" placeholder="DD"/>
        </div>
        <div className="col-md-3">
          <input type="Year" className="form-control fonte" id="floatingInputGrid" placeholder="YEAR"/>
        </div>
      </div>
      <label for="Email" className="form-label bordaA3">What's your gender?</label>
      <div className="row g-3">
        <div className="col-md-4">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={sex == 'Male'} onClick={(e) => setSex('Male')}/>
            <label className="form-check-label" for="flexRadio">
              Male
            </label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={sex == 'Female'} onClick={(e) => setSex('Female')}/>
            <label className="form-check-label" for="flexRadio">
              Female
            </label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={sex == 'Programmer'} onClick={(e) => setSex('Programmer')}/>
            <label className="form-check-label" for="flexRadio">
              Programmer
            </label>
          </div>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label bordaA3" for="exampleCheck1">Share my registration data with Spotify's content
            providers for marketing purposes.</label>
        </div>
        <button type="submit" className="button bordaA3" style={{color: 'black'}}>Sign up</button>
        </div>
    </form>
    </div>
    );
}


export default Cadastro;