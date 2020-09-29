import {connect} from 'react-redux'
import React from 'react'
import './Subtotal.css'
import './MediaQueries/SubtotalQ.css'
import {useHistory} from 'react-router-dom'
import Payment from './Payment'
function Subtotal(props){
    const history=useHistory();
return(
    <div className='Subtotal-div'>
<h1 >Total Amount Payable : ₹ <b>{props.total}</b></h1>

<button onClick={e=>history.push('/payment')} className='checkOut-btn'>Proceed To Payment</button>


    </div>

)
}

const mapStateToProps=(state)=>{

    return{
        total:state.total
    }
}
export default connect(mapStateToProps)(Subtotal)