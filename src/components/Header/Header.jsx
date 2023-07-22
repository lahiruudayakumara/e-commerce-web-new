import './header.css'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { NavLink } from 'react-router-dom'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  {page: 'Home'},
  {page: 'Shop'},
  {page: 'Cart'}
]

const Header = () => {
  return (
    <header className="header">
      <div className="containerHeader">
        <div className="row"></div>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt='placeholder-img'/>
              <div>
                <h1>Multimart</h1>
                <p>Since 1990</p>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {navLinks.map(({page}, index) => {
                  return (<li className="nav__item" key={index} >
                     <NavLink to={page} className={(navLinks)=> navLinks.isActive ? 'nav__active' : '' }>{page}</NavLink>
                   </li>
               ) })}
              </ul>
            </div>

            <div className="nav__icons">

              <span className="fav__icon">
                <i><FavoriteBorderIcon/></i>
                <span className="badge">12</span>
              </span>
              <span className="cart__icon">
                <i><LocalMallOutlinedIcon/></i>
                <span className="badge">2</span>
              </span>
              <span><img src={userIcon} alt=''/></span>
            </div>
            <div className="mobile__menu">
              <span>
                <i><MenuIcon/></i>
              </span>
            </div>

          </div>
        </div>
    </header>
  )
}

export default Header
