import './Register.css'
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='Register'>
        <span className="RegisterTitle">Register</span>
       <form className='RegisterForm'>
         <label>Username</label>
         <input type='email' className='RegisterInput' placeholder='Enter Your Username' />
         <label>Email</label>
         <input type='email' className='RegisterInput' placeholder='Enter Your Email' />
         <label>Password</label>
         <input type="password" className='RegisterInput' placeholder='Enter Your Password' />
         <button className='RegisterButton'>
              <Link to="/">Register</Link> 
          </button>
       </form>
        <button className="RegisterloginButton">
              <Link to="/login">Login</Link> 
          </button>
    </div>
  )
}
