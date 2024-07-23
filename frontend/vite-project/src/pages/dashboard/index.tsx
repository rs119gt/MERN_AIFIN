import React from 'react'
import {useUser} from '@clerk/clerk-react'
import DashboardExpensesForm from './dashboardExpensesForm';
import DashboardExpensesList from './dashboardExpensesList';

const dashboard = () => {
    const {user} =useUser();
  return (
    <>
    <div>
        <h1>Welcome {user?.firstName} ! Here are your expenses</h1>
    </div>
    <DashboardExpensesForm/>
    <DashboardExpensesList/>
    </>
  )
}

export default dashboard