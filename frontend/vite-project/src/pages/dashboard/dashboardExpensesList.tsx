import React from 'react'
import Axios from 'axios';
import { useEffect,useState } from 'react';
import {useUser} from '@clerk/clerk-react'
interface dashboardExpenses{
  userId:String,
  date:Date,
  description:String,
  amount:Number,
  category:String,
  payment:String,
}

const dashboardExpensesList = () => {
  const {user}=useUser()
  const [listofRecords,setListofRecords]=useState([])
useEffect(()=>{
  Axios.get("http://localhost:3001/getRecord",{params:{userId:user?.id}})
  .then((response)=>{
    setListofRecords(response.data)
  })

},[]);

  return (
    <>
    <div className="mt-5"><h1>Expenses History:</h1></div>
    <table className="table table-striped table-bordered table-hover">
    <thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Category</th>
      <th scope="col">Payment Method</th>
    </tr>
  </thead>
    {listofRecords.map((record)=>{
      return(
        <>
      

      
  
  <tbody>
    <tr>
      <th scope="row">{record.userId}</th>
      <td>{record.date}</td>
      <td>{record.description}</td>
      <td>{record.amount}</td>
      <td>{record.category}</td>
      <td>{record.payment}</td>
    </tr>
  </tbody>

      </>
      )
    })}
    </table>
    </>
  )
}

export default dashboardExpensesList