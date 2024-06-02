import "./Header.css" 
import Hey from '../../src/assets/lofi.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={Hey} alt="hey friend" />
    </div>
  )
}
