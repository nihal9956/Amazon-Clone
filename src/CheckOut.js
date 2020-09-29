import React from 'react'
import './CheckOut.css'
import './MediaQueries/CheckOutQ.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeFromCart, addQuantity,removeQuantity} from './Actions/cartAction'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ShopingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Subtotal from './Subtotal'
function CheckOut(props){

    function handelRemove(id){
        props.removeFromCart(id)
    }
    function handelAdd(id){
        props.addQuantity(id)
    }

    function handelRemoveQty(id){
        props.removeQuantity(id)
    }
  
  const cartItems=props.items.length?(
    props.items.map(item=>{
        return(
       
            <div className='item_Card'>
                
                <li className='cart-card'>
      
                    <div className='item-avatar'>
                        <img src={item.img} alt='prduct-avatar'/>
                    
                    </div>
                    <div className='item-des'>
        <span className='item-name'>{item.title}</span>
        <span><p><b>Price : ₹{item.price}</b></p></span>
        <span><p><b>Quantity : {item.quantity}</b></p></span>
                        <div className="add-remove">
                                                  <Link to="/checkout" className="arrows"onClick={()=>handelAdd(item.id)}><ArrowDropUpIcon/></Link>
                                                  <Link to="/checkout" className="arrows"onClick={()=>handelRemoveQty(item.id)}><ArrowDropDownIcon/></Link>
                                              </div>
                                              <button className="remove-btn" onClick={()=>handelRemove(item.id)}>Remove</button>
                    </div>
                </li>
            
            
                
            </div>
            )
    })
    ):<h1 className='empty'>Add Somthing To Cart <ShopingBasketIcon className='bag'/></h1>

    return(
    <div>
         <Subtotal/>
        {cartItems}
  
    </div>
    )
    
}

const mapStateToProps=(state)=>{

    return{
        items:state.addItems,
       
    }
   
}

const mapDispatchToProps=(dispatch)=>{
    return{
        removeFromCart:(id)=>{dispatch(removeFromCart(id))},
        addQuantity:(id)=>{dispatch(addQuantity(id))},
        removeQuantity:(id)=>{dispatch(removeQuantity(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckOut)