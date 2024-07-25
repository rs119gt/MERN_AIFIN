import React from 'react'
import Axios from 'axios';
import { useEffect,useState } from 'react';
interface dashboardExpenses{
  userId:String,
  date:Date,
  description:String,
  amount:Number,
  category:String,
  payment:String,
}
const dashboardExpensesList = () => {
 
  const [listofRecords,setListofRecords]=useState([])
useEffect(()=>{
  Axios.get("http://localhost:3001/getRecord")
  .then((response)=>{
    setListofRecords(response.data)
  })

},[]);

  return (
    <>
    <div>dashboardExpensesList</div>
    <table className="table table-striped table-bordered table-hover">
    <thead>
    <tr>
      <th scope="col">userId</th>
      <th scope="col">Date</th>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
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