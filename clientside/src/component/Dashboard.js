import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
// import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {showlist,deleteTask} from '../services/auth.services'
// import {AddTask} from '../component/AddTask'
import {Table,Container,Button} from 'react-bootstrap'
// import {web} from '../images/To-do-List-scaled.jpg'


export default function Dashboard() {

  // let history = useNavigate();

  const [show, setShow] =useState([]);
  useEffect(() => {
    const buttonHandle = async() => {
      const result = await showlist();
      const arr = result.data.result;
      console.log(result,"re")
      setShow(arr);
    }
    buttonHandle();
    }, [])
 

  const handleSubmit = async (_id) => {
    console.log(handleSubmit)
    alert("task deleted")
    const updateResponse = await deleteTask(_id);

  console.log(updateResponse,"iii")
  window.location.reload()
  }

  // const [shows,setShows] = useState()
  // useEffect (() => {
  //   const showList = async() => {
  //     const result = await getUserDetail()
  //     setShows([result.data.result])
  //   }
  //   showList();
  // },[])
  // console.log(shows)

  return (
    <>
   

  
    <Container>

    <div className="container  my-5">
      <div className= "row">
        <div className="col-md-12 mx-auto">
          
    {/* <button className="btn btn-outine-primary " onClick={buttonHandle}>Show Table</button> */}
    <br/><br/>
    <Link className="btn btn-primary" to="/add">Add Task</Link>
     
      <br/>
      <div className="data home bg-light"><br/>
    
      <Table striped bordered hover>

        <thead>
          <tr>
            <th>S.no.</th>
            <th>Checkbox</th>
            <th>Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Date of completion</th>
            <th>Action</th>
            <th>Delete</th>
            {/* <th>Status</th> */}
            
          </tr>
        </thead>
        <tbody>
          {show.map((data, index) => {
            return(
              <tr key={index}>
                <td>{index+1}</td>
                <td><input type="checkbox" abled/></td>
                <td>{data.title}</td>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.dateofcompletion}</td>
                <td><Link to={`/editbook/${data._id}`}>Edit</Link><br/></td>
                    
                    <td>  <Button variant="danger"
                       onClick={()=>handleSubmit(data._id)} 
                        className="bi bi-trash" >delete </Button>
                      </td>
                    

              </tr>
            )
          })}
        </tbody>
        </Table>
    </div>
    </div>
    </div>
    </div>

    </Container>
    </>
  )
}
