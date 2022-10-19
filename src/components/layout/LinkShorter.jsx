import React, { useEffect, useState } from 'react'
import Button from '../common/Button'

function LinkShorter() {
    const [link, setLink] = useState()
    const [list, setList] = useState([])

    useEffect(() => {
        let localList = localStorage.getItem('List')
        
        if(localList) setList(JSON.parse(localList))
    }, [])
    

    useEffect(() => {
      localStorage.setItem('List', JSON.stringify(list))
    }, [list])
    

    function handleLink(event) {
        event.preventDefault()
        
        setList(
            [...list, link]
        )
        setLink('')
    }

    return <section id='link-shorter'>
        <form id='form' onSubmit={handleLink}>
            <input
            type="text"
            name="link"
            id="link"
            placeholder='Shorten a link here...'
            value={link}
            onChange={event => setLink(event.target.value)} />
            <Button id={'shorter'} text={'Shorten It!'} />
        </form>

        <div id='links'>
            {
                list.map(
                    link => link
                )
            }
        </div>
    </section>
}

export default LinkShorter