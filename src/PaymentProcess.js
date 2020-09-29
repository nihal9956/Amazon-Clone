import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './PaymentProcess.css'
import './MediaQueries/PaymentProcessQ.css'
function PaymentProcess() {

    const stripe=useStripe()            //stripe
    const elements=useElements()        //stripe
    const [error,setError]=useState(null)
    const [disabled,setDisables]=useState(true)
    const [succeeded,setSucceeded]=useState(false)
    const [processing,setProcessing]=useState('')
    const [clientSecret,setClientSecret]=useState(true)
    const handelSubmit=(e)=>{
        e.preventDefault();
        setProcessing(true)

    }

    const handelChange=(e)=>{
            setDisables(e.empty)
            setError(e.error?e.error.message:"")
    }

    const fname=useSelector(state=>state.fName)
    const lname=useSelector(state=>state.lName)
    const address=useSelector(state=>state.address)
    const number=useSelector(state=>state.number)
    const pincode=useSelector(state=>state.pincode)
    const mark=useSelector(state=>state.landMark)
    const user=useSelector(state=>state.user)
    const total=useSelector(state=>state.total)
    
    return (
        <div className='order-container'>
        <div className='order-detailes'>
        <Link to='/'>
        <img className='logo2' src='https://pngimg.com/uploads/amazon/amazon_PNG6.png' alt='logo'/>
    </Link>
         <p>Name: <b>{`${fname} ${lname}`}</b></p>
    <p>Address: <b>{address}</b></p>
    <p>Contact Number: <b>{number}</b></p>
    <p>Email: <b>{user?.email}</b></p>
    <p>Pin Code: <b>{pincode}</b></p>
    <p>Land Mark: <b>{mark} </b></p>
    <p>Amount Payable: <b>₹ {total}</b></p>   

         <form on onSubmit={handelSubmit}>
             <CardElement onChange={handelChange}/>
         </form>
   
          <button className='checkout' disabled={processing||disabled||succeeded}>
    <span>{processing?<p>Processing</p>:"Buy Now"}</span>
          </button>
        </div>
        </div>
    )
}

export default PaymentProcess
