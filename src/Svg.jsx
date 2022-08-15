import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function Svg() {
  const [count, setCount] = useState(0);
  const checkIcon = {
    icon:
      <svg>
        < path d="M240.633 609.062C325.639 684.187 559.996 770.092 721.026 609.062" stroke="#8914C4" strokeWidth="200" strokeLinecap="round" />
        <path d="M240.633 590.197C325.639 665.322 559.996 751.227 721.026 590.197" stroke="#FD3972" strokeWidth="200" strokeLinecap="round" />
        <rect x="609.881" y="654.718" width="55.9224" height="60.516" rx="27.9612" transform="rotate(-30 609.881 654.718)" fill="white" />
        <path d="M240.633 590.197C325.639 665.322 559.996 751.227 721.026 590.197" stroke="black" strokeWidth="47" strokeLinecap="round" />
      </svg>
  };

  return (
    <>
      <svg width="300" height="300" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1000" height="1000" fill="white" />
        <rect width="1000" height="1000" fill="#C451FE" />
        {checkIcon.icon}
        <mask id="mask0_2_2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="471" y="168" width="291" height="290">
          <circle cx="616.29" cy="312.871" r="144.871" fill="#F3F3F3" />
        </mask>
        <g mask="url(#mask0_2_2)">
          <circle cx="616.29" cy="312.871" r="144.871" fill="#EFD0FF" />
          <circle cx="591.312" cy="283.73" r="134.88" fill="white" />
          <circle cx="621.286" cy="312.871" r="34.1363" fill="black" />
          <circle cx="607.964" cy="284.563" r="16.6519" fill="white" />
        </g>
        <mask id="mask1_2_2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="191" y="209" width="207" height="207">
          <circle cx="294.493" cy="312.455" r="102.825" fill="#F3F3F3" />
        </mask>
        <g mask="url(#mask1_2_2)">
          <circle cx="294.493" cy="312.455" r="102.825" fill="#EFD0FF" />
          <circle cx="276.764" cy="291.772" r="95.7339" fill="white" />
          <circle cx="298.038" cy="312.455" r="24.229" fill="black" />
          <circle cx="287.832" cy="295.803" r="11.24" fill="white" />
        </g>
        <circle cx="831.719" cy="482.339" r="15.0997" transform="rotate(-16.3552 831.719 482.339)" fill="#AA21EE" />
        <circle cx="883.008" cy="438.165" r="12.0798" transform="rotate(-16.3552 883.008 438.165)" fill="#AA21EE" />
        <circle cx="798.643" cy="423.255" r="30.1995" transform="rotate(-16.3552 798.643 423.255)" fill="#AA21EE" />
        <circle cx="119.37" cy="409.774" r="14.1568" transform="rotate(105.184 119.37 409.774)" fill="#AA21EE" />
        <circle cx="113.018" cy="461.188" r="8.97985" transform="rotate(105.184 113.018 461.188)" fill="#AA21EE" />
        <circle cx="177.505" cy="420.515" r="28.3136" transform="rotate(105.184 177.505 420.515)" fill="#AA21EE" />
      </svg>
    </>
  )
}

export default Svg
