import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo-kasa.svg'
import '../../styles/style.scss'

function Header(){
    return (
        <header>
            <Link to={'/'}><img src={Logo} alt='Kasa' className='logo' /></Link>
            <nav>
                <NavLink exact activeClassName='active' to={'/'}>
                    Accueil
                </NavLink>
                <NavLink  activeClassName='active' to={'/a-propos'}>
                    A Propos
                </NavLink>
            </nav>
        </header>

    )
}

export default Header