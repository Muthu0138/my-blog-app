import './SinglePost.css'
import Img from '../../assets/lofi.jpg'

export default function SinglePost() {
  return (
    <div className='singlepost'>
      <div className="singlepostWrapper">
        <img className='singlepostImage' src={Img} alt="it's Gojo" />
        <h1 className='singlepostTitle'>You Rock Brother
          <div className="singlepostEdit">
            <i className="singlepostIcon far fa-edit"></i>
            <i className="singlepostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlepostInfo">
          <span className='singlepostAuthor'>Author: <b>Muthu</b> </span>
          <span className="singlepostDate">1 Hour Ago</span>
        </div>
        <p className='singlepostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi optio perspiciatis, cum aliquam blanditiis repellendus vel voluptate! Corporis aliquam repudiandae eius? Tempora vel necessitatibus maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eaque voluptates repudiandae, fugiat voluptatum dolorum voluptate vero placeat quae tempora quidem sit ducimus at delectus tenetur ex laborum, expedita culpa? odio blanditiis nulla voluptatum animi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, ut dolorum laboriosam architecto cupiditate sapiente libero, repellendus commodi sint explicabo, blanditiis delectus. Corrupti nulla consectetur quas quis architecto repellendus sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, aut vitae est blanditiis dicta consequatur nemo, ipsa earum, pariatur libero minima doloremque excepturi vel iste cumque tempora magni eaque quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tenetur voluptatem neque quidem voluptates adipisci aut accusantium expedita magni minima? Quo natus deleniti labore ducimus doloremque quia modi ea laboriosam!</p>

      </div>



    </div>
  )
}
