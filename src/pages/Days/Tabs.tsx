import React from 'react'
import './Days.scss'
import { Day } from './Days'

type Props = {}

const Tabs = (props: Props) => {

    const tabs = [
        {
            value: 'Actual'
        },
        {
            value: 'Proximas 10hs'
        },
        {
            value: 'Proximo mes'
        },
    ]
  return (
    <div className='tabs'>
        <div className='tabs__wrapper'>
            {
                tabs.map((tab) => {
                    return (
                        <div className='tab active' key={tab.value}>
                            {tab.value}
                        </div>
                    )
                })
            }
        </div>
        <div className='cancel'>Cancelar</div>
    </div>
  )
}

export default Tabs