import './header.css'
import { Link } from 'react-router-dom'

export const Header = () =>{
    return(
        <header className="cont">
            <div className='logo'>
                <Link to='/'>
                    <img className='logo-img' src="./EldenRing.png" alt="elden ring" />
                </Link>
            </div>

            <div className="redirect">
                <Link to='/locations' style={{ color: 'white' , textDecoration: 'none' }} >
                    <h2>Locais</h2>
                </Link>
            </div>
        </header>
    )
}