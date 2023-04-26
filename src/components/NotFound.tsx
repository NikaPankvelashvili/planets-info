import Astronaut from '../assets/astronaut.png'
import './NotFound.css'

function NotFount() {
  return (
    <div className='not-found-page-container'>
      <div className='astronaut-wrapper'>
        <img className='astronaut' src={Astronaut} alt='astronaut' />
      </div>
      <div className='lost-in-space-text'>
        <p>YOU GOT LOST IN SPACE.</p>
        <span className='error-message'>(page not found)</span>
      </div>
    </div>
  )
}

export default NotFount