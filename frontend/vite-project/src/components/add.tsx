import React from 'react'
import { useState, useEffect } from 'react'
import  Axios  from 'axios'
interface User {
    name: string;
    age: number;
    username: string;
  }
const Add = () => {
    const [listofUsers,setlistofUsers] = useState<User[]>([])
    const [name,setName] = useState("")
    const [age,setAge] = useState<number>(0)
    const [username,setUsername] = useState("")
    /*
    useEffect(() =>{
      Axios.get("http://localhost:3001/getUsers").then((response)=>{setlistofUsers(response.data)});
    
    },[]);*/
    
    useEffect(() => {
      Axios.get("http://localhost:3001/getUsers").then((response) => {
        setlistofUsers(response.data);
      });
    }, []);
    
    const onSubmit=() =>{
      Axios.post("http://localhost:3001/createUsers",{
        name: name,
        age: age,
        username: username
      }).then(() => {
        alert("Success!");
    })};
    
    return(
      <>
      <div>
          {listofUsers.map((user)=>{
            return(
              <div className='container ' style={{width:480,background:'grey'}}>
              <div className= "card mb-5" >
                <div className="card-body">
                <h2>Name: {user.name}</h2>
                <h2>Age: {user.age}</h2>
                <h2>Username: {user.username}</h2>
              </div>
              </div>
              </div>
            )
          })}
      </div>
      <form>
      <div className='mt-5'>
        
       
          <input className="mb-3 form-control" type="text" placeholder='Enter name' onChange={(event)=>{
            setName(event.target.value)
          }}/>
          <input type="number" className='mb-3 form-control' placeholder='Enter age' onChange={(event)=>{
            setAge (Number(event.target.value))
          }}/>
          <input type="text" className='mb-3 form-control' placeholder='Enter username'onChange={(event)=>{
            setUsername(event.target.value)
          }}/>
      </div>
      <button type='submit' className="btn btn-primary" onClick={onSubmit}>Submit</button>
      </form>
      </>
        )
}

export default Add