import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {signup} from '../services/auth.services';

export default function Signup() {

  let nav = useNavigate();


  const[valid, setValid] =useState({
    fullname:true,
    email:true,
    password:true,
    phone:true,
    address:true,
    fullnameError:"",
    emailError:"",
    passwordError:"",
    phoneError:"",
    addressError:""
  });
  // const[responseMsg,setResponseMsg] = useState('');

  const[input,setInput] = useState({
    fullname:'',
    email:'',
    password:'',
    phone:'',
    address:''
  });


  
console.log(input)
  const handleChange = (e) => {
    const{name,value} = e.target;

    setInput((previousValue) => ({
      ...previousValue,
      [name] : value
    }))
  }

  //intigration
  const userSignup = async() => {
    console.log(input);
    const apiResponse = await signup(input.fullname, input.email, input.password, input.phone, input.address);
    console.log(apiResponse.data);
    if(apiResponse.data.status){
      nav("/login")}
    // }else{
    //   alert("Fill your information")
    // }
    // if(apiResponse.data.message){
    
    
  }

  const validatefullname = (fullname) => {
    if(fullname.length === 0){
      setValid((previousValue) => ({
        ...previousValue,
        fullname:false,
        fullnameError:"Please enter your fullname"
      }))
    } else{
        setValid((previousValue) => ({
          ...previousValue,
            fullname:true,
            fullnameError:"",
        }))
      }
    
  }


  const emailValidation = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = pattern.test(email);
   
    if(emailIsValid){
      setValid((previousValue) => ({
        ...previousValue,
        email:true,
        emailError:""
      }))
    }else{
      setValid((previousValue) => ({
        ...previousValue,
        email:false,
        emailError:"Please enter your email address"
      }))
    }
}

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

const phoneValidation = (phone) => {
  if(phone.length === 0 || phone.length < 0){
    setValid((previousValue) => ({
      ...previousValue,
      phone:false,
      phoneError:"Please enter your password"
    }))
  }else{
    setValid((previousValue) => ({
      ...previousValue,
      phone:true,
      phoneError:""
    }))
  }
}

const addressValidation = (address) => {
  if(address.length === 0){
    setValid((previousValue) => ({
      ...previousValue,
      address:false,
      addressError:"Please enter your address"
    }))
  } else{
      setValid((previousValue) => ({
        ...previousValue,
          address:true,
          addressError:"",
      }))
    }
  
}

const handleSubmit = (e) => {
  e.preventDefault();
  // nav("/login")
}

  return (
    <div className="container my-5">
      <div className = "row">
        {/* <div className="col-md-12 mx-auto"> */}
        <div className="signup col-md-12">
          <div className="back" style={{borderRadius:"1vh",padding:"3vh"}}>
            <form className="form" onSubmit={(e) => handleSubmit(e)} style={{width:"50vh"}}>
              <h3 className="text-center">Sign up</h3>
              <label>fullname </label><br/>
              <input className="form-control" name="fullname" placeholder="fullname" onBlur={(e) => validatefullname(e.target.value)} onChange={(e) => handleChange(e)}/>
              {!valid.fullname && <span className="text-danger">{valid.fullnameError}</span>}<br/>

              <label>email </label><br/>
              <input className="form-control" name="email" placeholder="email" onBlur={(e) => emailValidation(e.target.value)} onChange={(e) => handleChange(e)}/>
              {!valid.email && <span className="text-danger">{valid.emailError}</span>}<br/>

              
              <label>Password </label><br/>
              <input className="form-control" name="password" placeholder="Enter your password" onBlur={(e) => passwordValidation(e.target.value)} onChange={(e) => handleChange(e)}/>
              {!valid.password && <span className="text-danger">{valid.passwordError}</span>}<br/>

              <label>Phone </label><br/>
              <input className="form-control" name="phone" placeholder="Enter your number" onBlur={(e) => phoneValidation(e.target.value)} onChange={(e) => handleChange(e)}/>
              {!valid.phone && <span className="text-danger">{valid.phoneError}</span>}<br/>

              <label>Address </label><br/>
              <input className="form-control" name="address" placeholder="Enter your address" onBlur={(e) => addressValidation(e.target.value)} onChange={(e) => handleChange(e)}/>
              {!valid.address && <span className="text-danger">{valid.addressError}</span>}<br/>

              <button className="btn btn-md btn-outline-dark" onClick={userSignup}>Save</button>
              {/* {<b className="text-info">{responseMsg}</b>} */}
            </form>
            {/* <div className="col-md-6">iikgo</div> */}
          </div>
          
        </div>
        
        </div>
      </div>
      
    // </div>
  )
  }