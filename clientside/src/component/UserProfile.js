import React,{useState,useEffect} from 'react'
import{getUserDetail} from '../services/auth.services'


export default function UserProfile() {

  const [shows,setShows] = useState([])
  useEffect (() => {
    const showList = async() => {
      const result = await getUserDetail()
      const arr = [result.data.result]
      console.log( typeof arr)
      setShows(arr)
      
    }
    showList();
    
  },[])
  console.log("shivams",typeof shows)
  return (
    <div>
      <h1>this is my profile</h1>
      <span>shows</span>


    </div>
  )
}
