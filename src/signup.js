import React from 'react';
import { NavLink } from 'react-router-dom';
import Google from './icon/google.svg'
import Facebook from './icon/facebook.svg'

function signup() {
    return (
        <div className="mainContainer">
            <div className='subcontainer-1'>
                <div className='heading'>
                    Create your account
                </div>
                
                <div className='buttongroup'>
                    <NavLink to='#' className='bt'>
                        <img src={Google} /> Sign up with Google 
                    </NavLink>

                    <NavLink to='#' className='bt'>
                        <img src={Facebook} /> Sign up with Facebook 
                    </NavLink>
                </div>

            <div className="sep">
                <div className='line'></div>
                <h5 className='text'>OR</h5>
                <div className='line'></div>
            </div>
            
            <form className='details'>

                <div className='labeltext'>Name</div>
                <input type='text' className='text' placeholder='Enter your Name'></input>

                <div className='labeltext'>Email/Mobile</div>
                <input type='text' className='text' placeholder='Email or Mobile'></input>

                <div className='labeltext'>Password</div>
                <input type='password' className='text' placeholder='**********'></input>

                <input type='submit' value='Sign in' className='text'/>
            </form>

            <div className="last">
                 {/* <NavLink to="#">Forget Password?</NavLink> */}
                <br/>
                Existing User?<NavLink to='#'>Login here!</NavLink>
            </div>
            </div>
            <div className='subcontainer-2'>
                image
            </div>
            
        </div>
    )
}

export default signup
