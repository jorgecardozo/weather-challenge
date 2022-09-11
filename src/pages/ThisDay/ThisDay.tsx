import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../store/types/types'
import './ThisDay.scss'

type Props = {
  weather: Weather
}

const ThisDay = ({ weather }: Props) => {
  return (
    <header className='this__day'>
        <div className='top__block'>
            <div className='top__block__wrapper'>
                <div className='this__temp'>{`${Math.floor(weather.main.temp)}°`}</div>
                <div className='this__day__name'>Lunes</div>
            </div>
            <GlobalSvgSelector id="sun"/>
        </div>
        <div className='bottom__block'>
            <div className='this__time'> seg: <span> 21:34</span></div>
            <div className='this__city'> ciudad: <span> Bahia Blanca</span></div>
        </div>
    </header>
  )
}

export default ThisDay