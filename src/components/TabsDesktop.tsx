import React from 'react'
import { Link } from 'react-router-dom'
import './TabsDesktop.css'

function TabsDesktop(props: {
  color: string,
  activeIndex: number,
  changeIndex: (index: number) => void,
}) {
  return (
    <div className="tabs-desktop-container">
      <Link className={`tab-desktop ${props.activeIndex === 1 ? "" : "not-selected"}`} to={"../overview"} style={{ backgroundColor: props.activeIndex === 1 ? props.color : "transparent" }} onClick={() => props.changeIndex(1)} ><span className='tab-number'>01</span>OVERVIEW</Link>
      <Link className={`tab-desktop ${props.activeIndex === 2 ? "" : "not-selected"}`} to={"../structure"} style={{ backgroundColor: props.activeIndex === 2 ? props.color : "transparent" }} onClick={() => props.changeIndex(2)}><span className='tab-number'>02</span>STRUCTURE</Link>
      <Link className={`tab-desktop ${props.activeIndex === 3 ? "" : "not-selected"}`} to={"../surface"} style={{ backgroundColor: props.activeIndex === 3 ? props.color : "transparent" }} onClick={() => props.changeIndex(3)}><span className='tab-number'>03</span>SURFACE</Link>
    </div>
  )
}

export default TabsDesktop