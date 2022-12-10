import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {task} from '../services/auth.services';

export default function AddTask() {

  let navs = useNavigate();


  const[valid, setValid] =useState({
    title:true,
    date:true,
    time:true,
    dateofcompletion:true,
    titleError:"",
    dateError:"",
    timeError:"",
    dateofcompletionError:"",
  });
  // const[responseMsg,setResponseMsg] = useState('');

  const[input,setInput] = useState({
    title:'',
    date:'',
    time:'',
    dateofcompletion:'',
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
  const addTask = async() => {
    console.log(input);
    const apiResponse = await task(input.title, input.date, input.time, input.dateofcompletion);
    console.log(apiResponse.data);
    if(apiResponse.data.status === true)
    {
      navs("/dashboard")}
    // }else{
    //   alert("Fill your information")
    // }
    // if(apiResponse.data.message){
    
    
  }

  const validateTitle = (title) => {
    if(title.length === 0){
      setValid((previousValue) => ({
        ...previousValue,
        title:false,
        titleError:"Please enter your title"
      }))
    } else{
        setValid((previousValue) => ({
          ...previousValue,
            title:true,
            titleError:"",
        }))
      }
  }


  const dateValidation = (date) => {
    if(date.length === 0){
      setValid((previousValue) => ({
        ...previousValue,
        date:false,
        dateError:"Please enter your date"
      }))
    } else{
        setValid((previousValue) => ({
          ...previousValue,
            date:true,
            dateError:"",
        }))
      }
  }

const timeValidation = (time) => {
  if(time === 0 ){
    setValid((previousValue) => ({
      ...previousValue,
      time:false,
      timeError:"Please enter your time"
    }))
  }else{
    setValid((previousValue) => ({
      ...previousValue,
      time:true,
      timeError:""
    }))
  }
}

const dateofcompletionValidation = (dateofcompletion) => {
  if(dateofcompletion.length === 0 ){
    setValid((previousValue) => ({
      ...previousValue,
      dateofcompletion:false,
      dateofcompletionError:"Please enter your date of completion"
    }))
  }else{
    setValid((previousValue) => ({
      ...previousValue,
      dateofcompletion:true,
      dateofcompletionError:""
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
        <div className="signup col-md-12 ">
          <div className="form-control" >
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <h3 className="text-center">Add Task</h3>
              <label>Title </label><br/>
              <input className="form-control" name="title" placeholder="title" onBlur={(e) => validateTitle(e.target.value)} onChange={(e) => handleChange(e)}/>
              {!valid.title && <span className="text-danger">{valid.titleError}</span>}<br/>

              <label>Date </label><br/>
              <input className="form-control" name="date" placeholder="date" onBlur={(e) => dateValidation(e.target.value)} onChange={(e) => handleChange(e)}/>
              {!valid.date && <span className="text-danger">{valid.dateError}</span>}<br/>

              
              <label>Time </label><br/>
              <input className="form-control" name="time" placeholder="time" onBlur={(e) => timeValidation(e.target.value)} onChange={(e) => handleChange(e)}/>
              {!valid.time && <span className="text-danger">{valid.timeError}</span>}<br/>

              <label>Date of completion </label><br/>
              <input className="form-control" name="dateofcompletion" placeholder="date of completion" onBlur={(e) => dateofcompletionValidation(e.target.value)} onChange={(e) => handleChange(e)}/>
              {!valid.dateofcompletion && <span className="text-danger">{valid.dateofcompletionError}</span>}<br/>


              <button className="btn btn-md btn-outline-primary" onClick={addTask}>Add</button>
              {/* {<b className="text-info">{responseMsg}</b>} */}
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
  }