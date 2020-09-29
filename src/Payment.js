import React from 'react'
import './Payment.css'
import './MediaQueries/PaymentQ.css'
import {Link,useHistory} from 'react-router-dom'
import { setFname } from './Actions/cartAction'
import { useDispatch, useSelector } from 'react-redux'
import PaymentProcess from './PaymentProcess'
import { SET_ADDRESS, SET_FNAME, SET_LNAME, SET_MARK, SET_NUMBER, SET_PINCODE } from './Actions/cartActionType'



function Payment(props){

    const fName = useSelector(state => state.fName)
    const dispatch = useDispatch()
    const history=useHistory()
    return(
        <div className='details-form'>
            <div className='form-constiner'>
                
    <Link to='/'>
        <img className='logo' src='https://pngimg.com/uploads/amazon/amazon_PNG6.png' alt='logo'/>
    </Link>

            <form>
                <input type='text' name='fname' onChange={(e)=>dispatch({ type:SET_FNAME,fName:e.target.value})}    placeholder='First-Name'/>
                <input type='text' name='lname' onChange={(e)=>dispatch({ type:SET_LNAME,lName:e.target.value})}  placeholder='Last-Name'/>
                <input type='text' onChange={(e)=>dispatch({ type:SET_ADDRESS,address:e.target.value})} placeholder='Address'/>
                <input type='text'  onChange={(e)=>dispatch({ type:SET_NUMBER,number:e.target.value})} placeholder='Mobile-No'/>
                <input type='text'  onChange={(e)=>dispatch({ type:SET_PINCODE,pincode:e.target.value})} name='pinCode' placeholder='Pin Code'/>
                <input type='text'  onChange={(e)=>dispatch({ type:SET_MARK,landMark:e.target.value})} name='landMark' placeholder='Land Mark'/>
      <Link to='/process'>   <button class='proceed-btn'>Proceed</button> </Link>    
            </form>
     
            </div>
          
        </div>
    )
}
export default Payment