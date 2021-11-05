import React from 'react';
import { NavLink } from 'react-router-dom';
import Google from './icon/google.svg'
import Facebook from './icon/facebook.svg'
import main from './icon/main.png'
const login=()=>{
    return(
        <div className="mainContainer">
            <div className='subcontainer-1'>
            <div className="heading">
                Log in to your Account
            </div>

            <div className='buttongroup'>
                <NavLink to="#" className='bt'>
                    <img src={Google} />Login with Google
                </NavLink>
                <NavLink to='#' className='bt'> 
                    <img src={Facebook} />Login with Facebook
                </NavLink>
            </div>

            <div className="sep">
                <div className='line'></div>
                <h5 className='text'>OR</h5>
                <div className='line'></div>
            </div>
            
            <form className='details'>
                <div className='labeltext'>Email/Mobile</div>
                <input type='text' className='text' placeholder='Email or Mobile'></input>

                <div className='labeltext'>Password</div>
                <input type='password' className='text' placeholder='**********'></input>

                <input type='submit' value='Log in' className='text'/>
            </form>

            <div className="last">
                 <NavLink to="#">Forget Password?</NavLink>
                <br/>
                New User?<NavLink to='#'> Sign Up</NavLink>
            </div>

            </div>
            <div className='subcontainer-2'>
            
                <img src={main} width='350' height='500' ></img>

            </div>                
        </div>
    )
}

export default login;