const Cadastro = () =>{

 /*const [nome, setNome]
  * const [Email, setEmail]
  * const [EmailConf, setEmailConf]
  * const [password, setPassword]
  * const [nickname, setNickname]
  * const [dia, setDia]
  * const [mes, setMes]
  * const [ano, setAno]
  * const[gender,setGender]
  */

    return(
    <div className="container fonte" className="estilofaq">
    <form className="mx-auto">
      <div className="mb-3">
        <label for="Email" className="form-label bordaA3">Email address</label>
        <input type="email" className="form-control bordaA3" id="Email" placeholder="Enter your email"
          aria-describedby="Email"/>
        <label for="Email" className="form-label bordaA3">Confirm Email</label>
        <input type="email" className="form-control bordaA3" id="Email" placeholder="Enter your email again"
          aria-describedby="email"/>
        <div id="emailHelp" className="form-text bordaA3">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="Email" className="form-label bordaA3">Password</label>
        <input type="password" className="form-control bordaA3" placeholder="Create your password" id="Password"/>
      </div>
      <div className="mb-3">
        <label for="Email" className="form-label bordaA3">What should we call you?</label>
        <input type="text" className="form-control bordaA3" placeholder="Enter a profile name" id="Nickname"/>
        <div id="nicknameHelp" className="form-text bordaA3">This appear on your profile.</div>
      </div>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
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
          <input type="Day" className="form-control bordaA3" id="floatingInputGrid" placeholder="DD"/>
        </div>
        <div className="col-md-3">
          <input type="Year" className="form-control bordaA3" id="floatingInputGrid" placeholder="YEAR"/>
        </div>
      </div>
      <label for="Email" className="form-label bordaA3">What's your gender?</label>
      <div className="row g-3">
        <div className="col-md-4">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label" for="flexRadio">
              Male
            </label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
            <label className="form-check-label" for="flexRadio">
              Female
            </label>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
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
        <button type="button" className="button bordaA3" style={{color: 'black'}}>Sign up</button>
        </div>
    </form>
    </div>
    );
}

export default Cadastro;