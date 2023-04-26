import React from 'react'
import './PlanetStat.css'

function PlanetStat(props: {
  name: string,
  value: string
}) {
  return (
    <div className='planet-stat-container'>
      <h4 className='planet-stat-name'>{props.name}</h4>
      <span className='planet-stat-number'>{props.value}</span>
    </div>
  )
}

export default PlanetStat