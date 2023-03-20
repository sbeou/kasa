import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo-kasa.svg'

function Header(){
    return (
        <header>
            <Link to={'/'}><img src={Logo} alt='Kasa' className='logo' /></Link>
            <nav>
                <NavLink exact="true" activeclassname='active' to={'/'}>
                    Accueil
                </NavLink>
                <NavLink  activeclassname='active' to={'/a-propos'}>
                    A Propos
                </NavLink>
            </nav>
        </header>

    )
}

export default Header