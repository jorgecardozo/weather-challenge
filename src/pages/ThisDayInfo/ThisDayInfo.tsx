import React from 'react'
import './ThisDayInfo'
import cloud from '../../assets/images/cloud.png'
import ThisDayItem from './ThisDayItem'
import './ThisDayInfo.scss'

type Props = {}

export interface Item {
    icon_id: string,
    name: string,
    value: string
}


const ThisDayInfo = (props: Props) => {
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
    <div className='this__day_info'>
        <div className='this__day_info_items'>
            {
                items.map((item: Item) => {
                    return <ThisDayItem key={item.icon_id} item={item}/>
                })
            }
        </div>
        <img className='cloud__img' src={cloud} alt='ver cosas'/>
    </div>
  )
}

export default ThisDayInfo