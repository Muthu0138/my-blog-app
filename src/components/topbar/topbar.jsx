import './topbar.css'
import Hey from '../../assets/elliot.jpg'
import { Link } from 'react-router-dom';

function topbar() {
  
  return (
    <div className="top"> 
          <div className='topLeft'>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            </div>
          <div className='topCenter '>
             <ul className='topList'>
             <li className="topListItem">
                 <Link to="/">HOME</Link>
             </li>
             <li className="topListItem">
                  <Link to="/">ABOUT</Link>
             </li>
             <li className="topListItem">
                  <Link to="/">CONTACT</Link> 
             </li>
             <li className="topListItem">
                  <Link to="/write">WRITE</Link>
             </li>
            <li className="topListItem">
                  <Link to="/login">LOGOUT</Link> 
             </li>
             </ul>
          </div>
          <div className='topRight'>
          <Link to="/settings"><img className='topImg' src={Hey} alt="" /></Link>
             
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </div>
      </div>
  )
}

export default topbar;
