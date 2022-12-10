
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskDetail, updateTask } from "../services/auth.services";


function EditTask() {

    let { id } = useParams();
    console.log(id,"id");
    const navigate = useNavigate();
    // const [data,setData] = useState([]);


    const [input, setInput] = useState({
        title: "",
        date:"",
        time: "",
        dateofcompletion: '',
    });
   

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInput((previousValue) => ({
            ...previousValue,
            [name]: value
        }));

    };


    useEffect(() => {
       
        const test = async (id) => {
            const response = await getTaskDetail(id);
            setInput(() => ({
                title: response.data.result.title,
                date: response.data.result.date,
                time: response.data.result.time,
                dateofcompletion: response.data.result.dateofcompletion,
            }))
            console.log(response)
        }
        test(id);
    },[] );
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Run update code here");
        const updateResponse = await updateTask(input,id);
        if (updateResponse.data.status === true) {
            navigate("/dashboard");
        } else {
            alert("update failed");
        }
        console.log(updateResponse);

    }

    return (
        <div className="container my-5">
      <div className = "row">
        <div className="signup col-md-12 ">
          <div className="form-control" >
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <h3 className="text-center">Add Task</h3>
              <label>Title </label><br/>
              <input className="form-control" name="title" placeholder="title" onChange={(e) => handleChange(e)}/>
              <br/>
              <label>Date </label><br/>
              <input className="form-control" name="date" placeholder="date"  onChange={(e) => handleChange(e)}/><br/>
              
              <label>Time </label><br/>
              <input className="form-control" name="time" placeholder="time" onChange={(e) => handleChange(e)}/>
            <br/>

              <label>Date of completion </label><br/>
              <input className="form-control" name="dateofcompletion" placeholder="date of completion" onChange={(e) => handleChange(e)}/><br/>


              <button className="btn btn-md btn-outline-primary" type="submit">Add</button>
              {/* {<b className="text-info">{responseMsg}</b>} */}
            </form>
          </div>
        </div>
      </div>
      
    </div>
    )
}

export default EditTask;