import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShopingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {connect} from 'react-redux'
import {auth} from './firebase'
import './MediaQueries/HeaderQ.css'
function Header(props) {
 const login=()=>{
     auth.signOut();
 }
  
    return (
        <nav className='header'>
            <Link to='/'>
            <img className='header-logo' alt="logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
            </Link>
            <div className='header-search'>
            <input className='header-searchInput'/>
            <SearchIcon className='header-searchIcon'/>

            </div>
               
               <div className="header-Nav">
            <Link to={!props.user&&'/login'} className='header-link'>
                <div onClick={login} className='header-option'>
            <span className='header-optionLineOne'>Hello</span>
            <span className='header-optionLineTwo'>{props.user?"Sign Out":"Sign In"}</span>

                </div>
           
            </Link>        
            <Link to='/' className='header-link'>
                <div className='header-option'>
            <span className='header-optionLineOne'>Return</span>
            <span className='header-optionLineTwo'>& Orders</span>

                </div>
           
            </Link>        
            <Link to='/' className='header-link'>
                <div className='header-option'>
            <span className='header-optionLineOne'>Your</span>
            <span className='header-optionLineTwo'>Prime</span>

                </div>
           
            </Link>        
<Link to='/checkout' className='header-link'>
<div className='header-optionBasket'>
    <ShopingBasketIcon />
    <span className='header-optionLineTwo basketCount'>{props.qty}</span>

</div>
</Link>
               </div>

           
        </nav>
    )
}
const mapStateToProps=(state)=>{
    return{
        qty:state.qty,
        user:state.user
    }
}
export default connect(mapStateToProps)(Header)
