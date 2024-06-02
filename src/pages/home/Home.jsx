import './Home.css'
import Header from "../../header/Header.jsx";
import Posts from '../../posts/Posts.jsx';
import SideBar from '../../sidebar/SideBar.jsx';

export default function Home() {
  return (
    <>
    <Header/>
    <div className='home'>  
        <Posts/>
        <SideBar/>
    </div>
   </>
  )
}
