import React from 'react'
import './Home.css'
import Product from './Product'

function Home(props){

    return(
        <div className='home'>
           
           
     <img className='home-banner' alt='banner'src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_days/August/Updated/D14588853_IN_WLME_Xiaomi_Landing_Page_DesktopTallHero_1500x600_1._CB407389156_.jpg"/>
        <div className='product-row'>

 <Product/>
       
        </div>
       
        
        </div>
    )
}


export default Home