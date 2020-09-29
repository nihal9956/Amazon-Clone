import React, { useState } from 'react'
import './Login.css'
import './MediaQueries/LoginQ.css'
import {Link,useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login(){
    const history=useHistory();

    const[Email,setEmail]=useState('');
    const[password,setPassword]=useState('');
     const Login=(e)=>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(Email,password)
        .then((auth)=>{
          history.push('/');
        })
        .catch((e)=>alert(e.message))

     }
     const register=(e)=>{
        e.preventDefault()

        auth.createUserWithEmailAndPassword(Email,password)
        .then(auth=>{
            history.push('/');
        })
        .catch(e=>alert(e.message))
     }
    return(
<div className='login'>
    <div className='login-container'>

    <Link to='/'>
        <img className='logo' src='https://pngimg.com/uploads/amazon/amazon_PNG6.png' alt='logo'/>
    </Link>
    
    <form>
    <h2>Sign in</h2>
        <h5 className='form-heading'>Email</h5><br/>
        <input className='input' value={Email} type='email' onChange={(e)=>setEmail(e.target.value)}/><br/>
        <h5 className='form-heading'>Password</h5><br/>
        <input value={password} className='input' type='password' onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit' onClick={Login} className='login-btn'>Sign In</button>
        <p className='terms-para'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
    <button onClick={register} className='acc-btn'>Create your Amazon account</button>
    </form>
  
    </div>

</div>
    )
}
export default Login