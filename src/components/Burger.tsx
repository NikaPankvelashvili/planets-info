import React from 'react'
import BurgerElement from './BurgerElement'
import './Burger.css'

function Burger(props: { show: boolean, negateShowMenu: Function }) {
  return (
    <div className={`burger-list ${props.show ? "show" : ""}`} style={{ height: `${window.document.body.offsetHeight}` }}>
      <BurgerElement color='#DEF4FC' planetName='MERCURY' linkDirection='/mercury/overview' negateShowMenu={props.negateShowMenu} />
      <BurgerElement color='#F7CC7F' planetName='VENUS' linkDirection='/venus/overview' negateShowMenu={props.negateShowMenu} />
      <BurgerElement color='#545BFE' planetName='EARTH' linkDirection='/earth/overview' negateShowMenu={props.negateShowMenu} />
      <BurgerElement color='#FF6A45' planetName='MARS' linkDirection='/mars/overview' negateShowMenu={props.negateShowMenu} />
      <BurgerElement color='#ECAD7A' planetName='JUPITER' linkDirection='/jupiter/overview' negateShowMenu={props.negateShowMenu} />
      <BurgerElement color='#FCCB6B' planetName='SATURN' linkDirection='/saturn/overview' negateShowMenu={props.negateShowMenu} />
      <BurgerElement color='#65F0D5' planetName='URANUS' linkDirection='/uranus/overview' negateShowMenu={props.negateShowMenu} />
      <BurgerElement color='#497EFA' planetName='NEPTUNE' linkDirection='/neptune/overview' negateShowMenu={props.negateShowMenu} />
    </div>
  )
}

export default Burger