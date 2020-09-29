import React from 'react'
 
import './Product.css'
import './MediaQueries/ProductQ.css'
import StarIcon from '@material-ui/icons/Star';
import {connect} from 'react-redux'
import {addToCart} from './Actions/cartAction'
function Product(props) {
   
   function handelClick(id){
       
        props.addToCart(id)
       
        
   }
    
 const products=props.items.map(item=>{
return(

    <div className="product-Container">
    <div className='product'>
        <img src={item.img} alt='product-img'/>

<p className='product-title'><strong>{item.title}</strong></p>
<p className='product-price'>
<small>₹</small>    
<strong>{item.price}</strong>    


</p>
<div className='product-rating'>
    {Array(item.rating)
    .fill()
    .map(()=><StarIcon/>)}

    
</div>

    <button onClick={()=>handelClick(item.id)}>Add To Cart</button>
    </div>
    </div>


)
   

 })
    
    return (
    <div className='card'>{products}</div>
         )
}

const mapStateToProps=(state)=>{
    return{
        items:state.items
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addToCart:(id)=>dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product)
