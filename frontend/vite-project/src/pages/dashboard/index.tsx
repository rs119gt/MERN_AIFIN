import React from 'react'
import {useUser} from '@clerk/clerk-react'
import DashboardExpensesForm from './dashboardExpensesForm';
import DashboardExpensesList from './dashboardExpensesList';
import { UserButton,SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react'
const dashboard = () => {
    const {user} =useUser();
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <SignedIn>
      <UserButton/>
    </SignedIn>
    <SignedOut>
      <SignInButton/>
    </SignedOut>
    </nav>
    <div>
        <h1>Welcome {user?.firstName} ! Here are your expenses</h1>
    </div>
    <DashboardExpensesForm/>
    <DashboardExpensesList/>
    </>
  )
}

export default dashboard