import React, { useLayoutEffect, useState } from 'react'
import './PlanetInfo.css'
import { Link, useLocation } from 'react-router-dom';
import LinkIcon from '../assets/icon-source.svg';
import PlanetStat from './PlanetStat';
import PlanetData, { DetailedInfo } from '../Interface';
import TabsDesktop from './TabsDesktop';

function PlanetInfo(props: {
  details: DetailedInfo,
  image: string,
  data: PlanetData,
  extraImage?: string,
  color: string
}) {


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
    <div className='planet-info-container' >
      <div className='image-and-description-and-tabs-desktop'>
        <div className='image-and-extra-image'>
          <img className='planet-image' src={props.image} alt={props.data.name} />
          {props.extraImage && <img className='planet-extra-image' src={props.extraImage} alt='zoomed-surface' />}
        </div>
        <div className='description-and-tabs-desktop'>
          <div className='planet-title-description-source'>
            <h2 className='planet-title'>{props.data.name}</h2>
            <p className='planet-description'>{props.details.content}</p>
            <span className='source-wrapper'>Source:
              <Link style={{ position: "relative", zIndex: "-1" }} className='wiki-link' to={props.details.source}>Wikipedia</Link>
              <img src={LinkIcon} alt='link-icon' />
            </span>
          </div>
          <div className='tabs-desktop-wrapper'>
            <TabsDesktop color={props.color} activeIndex={activeIndex} changeIndex={changeActiveIndex} />
          </div>
        </div>
      </div>


      <div className='planet-specification-container'>
        <PlanetStat name='ROTATION TIME' value={props.data.rotation} />
        <PlanetStat name='REVOLUTION TIME' value={props.data.revolution} />
        <PlanetStat name='RADIUS' value={props.data.radius} />
        <PlanetStat name='AVERAGE TEMP.' value={props.data.temperature} />
      </div>
    </div>
  )
}

export default PlanetInfo