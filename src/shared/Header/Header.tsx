import React, { useEffect, useState } from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import './Header.scss'
import Select from 'react-select'
import { useTheme } from '../../hooks/useTheme'
import { Theme } from '../../context/ThemeContext'

type Props = {}


const Header = (props: Props) => {
  
  const theme = useTheme()
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000'
    }),
  };

const changeTheme = () => {
  theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
}

  return (
    <div className='header'>
        <div className='wrapper'>
            <div className='logo'>
                <GlobalSvgSelector id='header-logo'/>
            </div>
            <div className='title'> React weather</div>
        </div>
        <div className='wrapper'>
            <div className='change-theme' onClick={changeTheme}>
                <GlobalSvgSelector id='change-theme'/>
            </div>
            <Select defaultValue={options[0]} styles={colourStyles} options={options} />
        </div>
    </div>
  )
}

export default Header