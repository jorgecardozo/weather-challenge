import React from 'react'
import Card from './Card';
import './Days.scss'
import Tabs from './Tabs';

type Props = {}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

const Days = (props: Props) => {
    const days: Day[] = [
        {
            day: 'Lunes',
            day_info: 'day_info',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Martes',
            day_info: 'day_info',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Miercoles',
            day_info: 'day_info',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Jueves',
            day_info: 'day_info',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Viernes',
            day_info: 'day_info',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Sabado',
            day_info: 'day_info',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
        {
            day: 'Domingo',
            day_info: 'day_info',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'asdasd'
        },
    ]
  return (
    <>
        {/* <Tabs/> */}
        <div className='days'>
            {
                days.map ((day: Day)=>{
                    return <Card key={day.day} day={day}/>
                })
            }
        </div>
    </>
  )
}

export default Days