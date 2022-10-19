import React from 'react'
import { v4 as key } from "uuid";
import Statistic from '../common/Statistic'

const statistics = [
    {
        icon: '',
        title: 'Brand Recognition',
        text: ''
    },
    {
        icon: '',
        title: 'Detailed Records',
        text: ''
    },
    {
        icon: '',
        title: 'Fully Customizable',
        text: ''
    }
]

function Statistics() {
  return <section id='statistic'>
    <h1>Advanced Statistics</h1>
    <p>Track how your links are performing across the web with our advanced dashboard.</p>

    <div id='statistics'>
        {
            statistics.map(
                statistic => <Statistic key={key()} icon={statistic.icon} title={statistic.title} text={statistic.text} />
            )
        }
    </div>
  </section>
}

export default Statistics