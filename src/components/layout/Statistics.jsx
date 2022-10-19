import '../../styles/layout/Statistics.scss'
import React from 'react'
import { v4 as key } from "uuid";
import Statistic from '../common/Statistic'

const statistics = [
    {
        icon: 'Monitoring',
        title: 'Brand Recognition',
        text: "Boost your brand recognition with cach click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
        icon: 'Speed',
        title: 'Detailed Records',
        text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
        icon: 'Brush',
        title: 'Fully Customizable',
        text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
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