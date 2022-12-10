import React, { useState} from "react";
import { useNavigate} from "react-router-dom";
import { login} from "../services/auth.services";


export default function Login() { 

  // let { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const [responseMsg, setResponseMsg] = useState('');
  const [valid, setValid] = useState({
    email: true,
    password: true,
    emailError: "",
    passwordError: "",
  });

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const emailValidation = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = pattern.test(email);

    if (emailIsValid) {
      setValid((previousValue) => ({
        ...previousValue,
        email: true,
        emailError: "",
      }));
    } else {
      setValid((previousValue) => ({
        ...previousValue,
        email: false,
        emailError: "Please enter your email address",
      }));
    }
  };


  const passwordValidation = (password) => {
    if(password.length === 0 || password.length < 0){
      setValid((previousValue) => ({
        ...previousValue,
        password:false,
        passwordError:"Please enter your password"
      }))
    }else{
      setValid((previousValue) => ({
        ...previousValue,
        password:true,
        passwordError:""
      }))
    }
  }

  

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const buyerlogin = async () => {
    console.log(input);

    const apiResponse = await login(input.email, input.password);
    setResponseMsg(apiResponse.data.message)
    if (apiResponse.data.status === 200) {
      navigate("/dashboard");
    } else {
      alert("Fill your information");
    }
    
  };



  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="back" style={{borderRadius:"1vh",padding:"3vh"}}>
              <section>
                <h3 className="text-center">Login</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <label> Email Address </label>
                  <input
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    onBlur={(e) => emailValidation(e.target.value)}
                    onChange={(e) => handleChange(e)}
                  />
                  {!valid.email && (
                    <span className="text-danger">{valid.emailError}</span>
                  )}
                  <br />

                  <label>Password </label><br/>
              <input className="form-control" name="password" placeholder="Enter your password" onBlur={(e) => passwordValidation(e.target.value)} onChange={(e) => handleChange(e)}/>
              {!valid.password && <span className="text-danger">{valid.passwordError}</span>}<br/>

                  
                  <button
                    className="btn md-2 btn-outline-dark btn-center"
                    onClick={buyerlogin}
                  >
                    Login
                  </button>
                  
                  {<b className="text-info">{responseMsg}</b>}
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
