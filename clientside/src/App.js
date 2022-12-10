import './App.css';
import Navbar from './component/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signup from './component/Signup'
import Login from './component/Login'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './component/Dashboard'
import AddTask from './component/AddTask'
import Show from './component/Show'
import UserProfile from './component/UserProfile'
import EditTask from './component/EditTask';
import Profile from './component/Profile';

function App() {
  return (
    <>
    
    <Navbar/>
    {/* <Dashboard/> */}
    <Routes>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/UserProfile" element={<UserProfile/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="add" element={<AddTask/>}/>
      <Route exact path="/" element={<Show/>}/>
      <Route exact path="/editbook/:id" element={<EditTask/>}/>
      <Route exact path="/profile" element={<Profile/>}/>

      {/* <Redirect path="/"/> */}
    </Routes>
    
    </>
  );
}

export default App;
