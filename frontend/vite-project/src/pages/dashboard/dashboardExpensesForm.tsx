
import React, { useState } from 'react'
import {useUser} from '@clerk/clerk-react'
const dashboardExpensesForm = () => {
  const [description,setDescription]=useState("");
  const [amount,setAmount]=useState<number>(0);
  const [category,setCategory]=useState("");
  const [payment,setPayment]=useState("");
  const {user}=useUser()
  const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const createRecord={
      userId:user?.id,
      date:new Date(),
      description:description,
      amount:amount,
      category:category,
      payment:payment,
    };

    setDescription("")
    setAmount(0)
    setCategory("")
    setPayment("")
  };
  return (
    <>
    
    <div className='container rounded' style={{border:"2px solid grey"}}>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" aria-describedby="emailHelp" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="amount" className="form-label">Amount</label>
    <input type="number" className="form-control" id="amount" aria-describedby="emailHelp" value={amount} onChange={(e)=>{setAmount(Number(e.target.value))}}/>
  </div>
  <div className="mb-3">
  <label htmlFor="category" className="form-label">Category</label>
  <select className="form-select" aria-label="Default select example" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
  
  <option selected value="">Select category </option>
  <option value="Food">Food</option>
  <option value="Rent">Rent</option>
  <option value="Salary">Salary</option>
  <option value="Utilities">Utilities</option>
  <option value="Entertainment">Entertainment</option>
  <option value="Other">Other</option>
</select>
</div>
<div className="mb-3">
  <label htmlFor="payment" className="form-label">Payment</label>
  <select className="form-select" aria-label="Default select example" value={payment} onChange={(e)=>{setPayment(e.target.value)}}>
  
  <option selected value="">Select payment method</option>
  <option value="Credit Card">Credit Card</option>
  <option value="Cash">Cash</option>
  <option value="Bank Transfer">Bank Transfer</option>
</select>
</div>
<div className='mb-3'>
  <button type="submit" className="btn btn-primary">Add Record</button>
  </div>
</form>
</div>
</>
  )
}

export default dashboardExpensesForm