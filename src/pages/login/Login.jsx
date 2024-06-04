import './Login.css'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
       <form className='loginForm'>
         <label>Email</label>
         <input type='email' className='loginInput' placeholder='Enter Your Email' />
         <label>Password</label>
         <input type="password" className='loginInput' placeholder='Enter Your Password' />
         <button className='loginButton'>
          <Link to="/">Login</Link>
          </button>
       </form>
        <button className="loginRegisterButton">
            <Link to="/register">Register</Link>
        </button>
    </div>
  )
}
