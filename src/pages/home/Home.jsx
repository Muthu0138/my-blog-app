import './Home.css'
import Header from "../../components/header/Header.jsx";
import Posts from '../../components/posts/Posts.jsx';
import SideBar from '../../components/sidebar/SideBar.jsx';

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
