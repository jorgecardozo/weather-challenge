import React from 'react'
import ThisDayItem from '../../pages/ThisDayInfo/ThisDayItem';
import {  Item } from '../../pages/ThisDayInfo/ThisDayInfo'
import './Popup.scss'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

type Props = {
    // items: Item[];
}

const Popup = ({}: Props) => {

    const items = [
        {
            icon_id: 'temp',
            name: 'Temperatura',
            value: '20* grados max 17*'
        },
        {
            icon_id: 'pressure',
            name: 'TempeWsdfsdfWsdfratura',
            value: '20* grados max 17*'
        },
        {
            icon_id: 'precipitation',
            name: 'asdasdasd',
            value: '20* grados max 17*'
        },
        {
            icon_id: 'wind',
            name: 'Viento',
            value: '20* grados max 17*'
        },
    ]
  return (
    <>
        <div className='blur'></div>
        <div className='popup'>
            <div className='day'>
                <div className='day__temp'>20*</div>
                <div className='day__name'>Lunes</div>
                <div className='img'><GlobalSvgSelector id='sun'/></div>
                <div className='day__time'>
                    hora: <span> 21:29 </span>
                </div>
                <div className='day__city'>
                    Ciudad: <span>Bahia Blanca</span>
                </div>
            </div>
            <div className='this__day_info_items'>
                {
                    items.map((item: Item) => {
                        return <ThisDayItem key={item.icon_id} item={item}/>
                    })
                }
            </div>
            <div className='close'>
                <GlobalSvgSelector id='close'/>
            </div>
        </div>
    </>
  )
}

export default Popup