import './Home.css'
import Header from "../../components/header/Header.jsx";
import Posts from '../../components/posts/Posts.jsx';
export default function Home() {
  return (
    <>
    <Header/>
    <hr />
    <h2>Posts</h2>
    <div className='home'>  
        <Posts/>
    </div>
   </>
  )
}
