import React from 'react'
import {SignIn,SignedIn,SignedOut,SignInButton,SignOutButton,UserButton, SignUpButton} from '@clerk/clerk-react'
const auth = () => {
  return (
    <>
    <SignedOut>
    <button type="button" className="btn btn-dark"><SignInButton mode='modal'/></button>
    <button type="button" className="btn btn-dark">   <SignUpButton mode='modal'/></button>
    </SignedOut>
    <SignedIn>
        <UserButton/>
    </SignedIn>
   
    </>
  )
}

export default auth