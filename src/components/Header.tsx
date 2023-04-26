import { useState, useEffect } from 'react';
import './Header.css';
import HamburgerMenu from '../assets/icon-hamburger.svg';
import LineMaxWidth from './LineMaxWidth';
import { Link, Outlet } from 'react-router-dom';
import Burger from './Burger';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("disable-scroll", showMenu);
  }, [showMenu]);

  // useEffect(() => {
  //   window.location.replace("/mercury/overview");
  // }, [])

  const negateShowMenu = (): void => {
    setShowMenu(prev => !prev)
  }


  return (
    <>
      <header className='header-container'>
        <h1 className='header-logo'>THE PLANETS</h1>
        <nav>
          <ul className='nav-ul'>
            <Link className='nav-link mercury' to={"/mercury/overview"}>
              MERCURY
            </Link>
            <Link className='nav-link venus' to={"/venus/overview"}>
              VENUS
            </Link>
            <Link className='nav-link earth' to={"/earth/overview"}>
              EARTH
            </Link>
            <Link className='nav-link mars' to={"/mars/overview"}>
              MARS
            </Link>
            <Link className='nav-link jupiter' to={"/jupiter/overview"}>
              JUPITER
            </Link>
            <Link className='nav-link saturn' to={"/saturn/overview"}>
              SATURN
            </Link>
            <Link className='nav-link uranus' to={"/uranus/overview"}>
              URANUS
            </Link>
            <Link className='nav-link neptune' to={"/neptune/overview"}>
              NEPTUNE
            </Link>
          </ul>
        </nav>
        <img className={`burger-menu ${showMenu ? "reduced-opacity" : ""}`} src={HamburgerMenu} alt='Hamburger Menu' onClick={() => {
          negateShowMenu();
          window.scrollTo({ top: 0, left: 0, });
        }} />
      </header>
      <Burger show={showMenu} negateShowMenu={negateShowMenu} />
      <LineMaxWidth />
      <Outlet />
    </>
  )
}

export default Header