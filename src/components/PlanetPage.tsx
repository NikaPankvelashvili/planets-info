import React, { useState, useLayoutEffect } from 'react'
import "./PlanetPage.css"
import LineMaxWidth from './LineMaxWidth'
import Tabs from './Tabs'
import { Outlet, useLocation } from 'react-router-dom';
import PlanetData from '../Interface';

function PlanetPage(props: { color: string, data: PlanetData }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const parrentPath = useLocation().pathname.split("/")[2];

  useLayoutEffect(() => {
    const locationIndex = parrentPath === "surface" ? 3 :
      parrentPath === "structure" ? 2 : 1;
    setActiveIndex(locationIndex);
  }, [parrentPath])

  const changeActiveIndex = (index: number): void => {
    setActiveIndex(index);
  }

  return (
    <div className='planet-page-container' >
      <div className='fullscreen'>
        <Tabs color={props.color} activeIndex={activeIndex} changeIndex={changeActiveIndex} />
        <LineMaxWidth />
      </div>
      <Outlet />
    </div>
  )
}

export default PlanetPage