import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to='/'>
          <img src="./EldenRingLogo.png" alt="elden ring" />
        </Link>
    </div>
  )
}

export default Home