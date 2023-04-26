import React from 'react'
import "./Burger.css"
import Arrow from '../assets/icon-chevron.svg';
import LineMaxWidth from './LineMaxWidth';
import { Link } from 'react-router-dom';

function BurgerElement(props: {
  planetName: string,
  color: string,
  linkDirection: string,
  negateShowMenu: Function
}) {
  return (
    <div style={{ padding: "15px 20px" }}>
      <Link to={props.linkDirection} className='burger-element-container' style={{ textDecoration: "none" }} onClick={() => {
        props.negateShowMenu();
        window.scrollTo({ top: 0, left: 0, });
      }}>
        <div className='burger-element-wrapper'>
          <div className='planet-circle' style={{ backgroundColor: props.color }}></div>
          <p className='planet-element-name'>{props.planetName}</p>
        </div>
        <img className='link-arrow' src={Arrow} alt='arrow' />
      </Link>
      <LineMaxWidth />
    </div>
  )
}

export default BurgerElement