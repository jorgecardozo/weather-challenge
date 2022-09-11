import React from 'react'
import { Item } from './ThisDayInfo'
import { IndicatorSvgSelector } from '../../assets/icons/indicators/IndicatorSvgSelector'
import './ThisDayItem.scss'

type Props = {
    item: Item
}

const ThisDayItem = ({item}: Props) => {
  return (
    <div className='item' key={item.value}>
        <div className='indicator'>
        <IndicatorSvgSelector id={item.icon_id} />
        </div>
        <div className='indicator__name'>{item.name}</div>
        <div className='indicator__value'>{item.value}</div>
    </div>
  )
}

export default ThisDayItem

// import React from 'react';
// import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSvgSelector';
// import { Item } from './ThisDayInfo';
// import s from './ThisDayInfo.module.scss';

// interface Props {
//   item: Item;
// }

// export const ThisDayItem = ({ item }: Props) => {
//   const { icon_id, name, value } = item;
//   return (
//     <div className={s.item}>
//       <div className={s.indicator}>
//         <IndicatorSvgSelector id={icon_id} />
//       </div>
//       <div className={s.indicator__name}>{name}</div>
//       <div className={s.indicator__value}>{value}</div>
//     </div>
//   );
// };