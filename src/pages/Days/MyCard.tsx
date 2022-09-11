import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import { Day } from './Days'
import { Card} from 'react-bootstrap';

type Props = {
    day: Day
}

const MyCard = ({day}: Props) => {
  return (
    <Card className='align-items-center' style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>
            <div className='day'>
                {day.day}
            </div>
        </Card.Title>
        <Card.Text>
            <div className='day__info'>
                {day.day_info}
            </div>
            <div className='img'>
                <GlobalSvgSelector id={day.icon_id}/>
            </div>
            <div className='temp__day'>
                {day.temp_day}
            </div>
            <div className='temp__night'>
                {day.temp_night}
            </div>
            <div className='info'>
                {day.info}
            </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MyCard