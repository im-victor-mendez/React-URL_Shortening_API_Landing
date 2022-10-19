import React from 'react'
import Button from './Button'

function Link({ original, shorter }) {
    function copyClipboard() {
        navigator.clipboard.writeText(shorter)
    }

    return <div className='link'>
        <p>{original}</p>
        
        <div id='short'>
            <p>{shorter}</p>
            <Button id={'copy'} text={'Copy'} action={copyClipboard} />
        </div>
    </div>
}

export default Link