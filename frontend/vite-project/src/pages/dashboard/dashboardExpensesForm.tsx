import React from 'react'

const dashboardExpensesForm = () => {
  return (
    <>
    <div className='container' style={{border:"2px solid grey"}}>
    <form>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="amount" className="form-label">Amount</label>
    <input type="number" className="form-control" id="amount" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
  <label htmlFor="category" className="form-label">Category</label>
  <select className="form-select" aria-label="Default select example">
  
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
  <select className="form-select" aria-label="Default select example">
  
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