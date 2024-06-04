import './Settings.css'
import Img from '../../assets/elliot.jpg'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className="settingspfp">
            <img src={Img} alt="" />
            <label htmlFor="fileInput">
              <i className="settingspfpIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="John Doe" />
          <label>Email</label>
          <input type="email" placeholder="JohnDoe@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>

        </form>
      </div>
    </div>
  )
}
