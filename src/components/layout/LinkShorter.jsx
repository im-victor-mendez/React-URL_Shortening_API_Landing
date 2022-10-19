import React, { useEffect, useState } from 'react'
import { apiShortening } from '../../utils/api'
import Button from '../common/Button'

function LinkShorter() {
    const [link, setLink] = useState({original: '', shorter: ''})
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
        
        //console.log(link)
        if(!link.shorter) return
        setList(
            [...list, link]
        )
        
        setLink({original: ''})
    }



    function shortURL(event) {
        apiShortening(link.original)
        .then(
            data => {
                const dataset = data.result
                //console.log(link.original, dataset, dataset.original_link, dataset.short_link)
                setLink(
                    {
                        original: link.original,
                        shorter: dataset.short_link
                    }
                )
                //console.log(link)
            }
        )

        handleLink(event)
    }

    return <section id='link-shorter'>
        <form id='form' onSubmit={shortURL}>
            <input
            type={'url'}
            required
            name="link"
            id="link"
            placeholder='Shorten a link here...'
            value={link.original}
            onChange={
                event => setLink(
                    {
                        original: event.target.value
                    }
                )
            } />
            <Button id={'shorter'} text={'Shorten It!'} />
        </form>

        <div id='links'>
            {
                list.map(
                    link => <div>
                        {link.original}
                        {link.shorter}
                    </div>
                )
            }
        </div>
    </section>
}

export default LinkShorter