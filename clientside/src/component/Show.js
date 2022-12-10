// import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
// import {showlist} from '../services/auth.services'
// import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Show() {

    let history = useNavigate();
//     const [show, setShow] =useState([]);

// useEffect(() => {
//   const buttonHandle = async() => {
//     const result = await showlist();
//     const arr = result.data.result;
//     console.log(result)
//     setShow(arr);
//   }
//   buttonHandle();
// }, [])

   
 

  return (
    <>

    <div className="container my-5">
    <div className= "row">
      <div className="home col-md-12 bg-light mx-auto">
        <div className = " my-5">
          <h1 className="text-center">Welcome to todo page</h1>
          <p >Hey, users here we provide get start button, after click you redirect to Signup page.</p>
          <p>After signup you redirect to login after login you will redirect to add task page and you can add your todo list.
          </p>
          <p>Below we provide show table button from where you can view your list </p>
          <h2 className="text-center"> Thank you :) </h2>
          <Link className="btn btn-outline-primary" to="/signup"
          onClick = { () => { 
            history.push("/signup")
            }}
            >Get Started</Link>

        </div>
        {/* <img src={web} alt=""></img> */}
        
      </div>
    </div>
  </div>
        {/* <div className="container"><br/>
      <button className="btn btn-outline-primary" onClick={buttonHandle}>Show Table</button>
      <br/>
      <table className="data bg-light"><br/>
      <Table striped bordered hover>

        <thead>
          <tr>
            <th>S.no.</th>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Date of completion</th>
          </tr>
        </thead>
        <tbody>
          {show.map((data, index) => {
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{data.title}</td>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.dateofcompletion}</td>
              </tr>
            )
          })}
        </tbody>
        </Table>
      </table>
    </div> */}

    </>
  )
}
