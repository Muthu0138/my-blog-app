import "./SideBar.css"
import image from '../../src/assets/cat.jpg';

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">About Me</span>
          <img className="image" src={image} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate, aliquid temporibus iure autem, ipsum libero.</p>
        </div>

        <div className="sidebarItem">
             <div className="sidebarTitle">
              CATEGORIES
             </div>  
             <ul className="sidebarList">
             <li className="sidebarListItem">Life</li>
             <li className="sidebarListItem">Music</li>
             <li className="sidebarListItem">Style</li>
             <li className="sidebarListItem">Sport</li>
             <li className="sidebarListItem">Tech</li>
             <li className="sidebarListItem">Cinema</li>
             </ul>    
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOllOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            </div>
        </div>
    </div>

  )
}
