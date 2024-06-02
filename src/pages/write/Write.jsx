import './Write.css'
import Img from '../../assets/busstop.jpg'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImage' src={Img} alt="" />
        <form className='writeform'>
            <div className="writeformGroup">
            <label htmlFor="fileInput">
                <i className="writeIcon fas fa-plus"></i>
            </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder='Title'  className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeformGroup">
                <textarea placeholder='Tell your story...' type="text" className='writeInput writeText'></textarea>
            </div>
            <button className='writeSubmit' type="submit">Publish</button>
        </form>
    </div>
  )
}
