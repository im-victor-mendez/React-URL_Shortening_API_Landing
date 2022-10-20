import '../../styles/layout/Top.scss'
import IllustrationWorking from '../../media/images/illustration-working.jsx'
import React from 'react'
import Button from '../common/Button'

function Top() {
  return <section id='top'>
    <div id='text'>
        <h1>More than just shorter links</h1>
        <p>Build yout brand's recognition and get datailed insights on how your links are performing.</p>
        <Button id={'get-started'} text={'Get Started'} />
    </div>

    <IllustrationWorking />
  </section>
}

export default Top