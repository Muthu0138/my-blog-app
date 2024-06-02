import "./Header.css" 
import Hey from '../../assets/lofi.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitle">Blog</span>
        </div>
        <img className="headerImg" src={Hey} alt="hey friend" />
    </div>
  )
}
