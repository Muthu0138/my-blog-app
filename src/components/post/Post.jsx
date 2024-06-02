import './Post.css'
import Img from '../../assets/yes.jpeg'

export default function Post() {
    return (
        <div className='post'>
            <img
                className='postImg'
                src={Img} alt="Image" />
            <div className="postInfo">
                <div className='postCats'>
                    <span className="postCat">Music</span>
                    <span className="postCat">Cinema</span>
                </div>
                <span className='postTitle'>
                    Lorem ipsum dolor sit.
                </span>
                
                <span className='postDate'>
                    1 Hour Ago
                </span>
            </div>
            <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, itaque corporis! Praesentium temporibus id odio. Asperiores unde molestias magnam nulla, alias, in voluptatibus animi, perferendis amet facilis porro doloribus tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eveniet molestias ipsa expedita eos voluptatibus quasi. Aliquid quae, provident perferendis reiciendis maiores quasi. Quo eligendi, error neque ut vel illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, iure nulla sint qui, sapiente cumque, quam neque excepturi ipsam molestias dignissimos molestiae consectetur! Incidunt ab voluptate doloribus aliquid consectetur natus?</p>
            
        </div>
    )
}
