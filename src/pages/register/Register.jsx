import './Register.css'


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
         <button className='RegisterButton'>Register</button>
       </form>
        <button className="RegisterloginButton">Login</button>
    </div>
  )
}
