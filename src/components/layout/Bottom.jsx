import React from 'react'
import { v4 as key } from "uuid";

const features = [
    {
        text: 'Link Shorting',
        href: ''
    },
    {
        text: 'Branded Links',
        href: ''
    },
    {
        text: 'Analytics',
        href: ''
    }
]

const resources = [
    {
        text: 'Blog',
        href: ''
    },
    {
        text: 'Developers',
        href: ''
    },
    {
        text: 'Support',
        href: ''
    }
]

const company = [
    {
        text: 'About',
        href: ''
    },
    {
        text: 'Our Team',
        href: ''
    },
    {
        text: 'Carrers',
        href: ''
    },
    {
        text: 'Contact',
        href: ''
    }
]

const socialMedias = [
    {
        icon: '',
        href: ''
    },
    {
        icon: '',
        href: ''
    },
    {
        icon: '',
        href: ''
    },
    {
        icon: '',
        href: ''
    }
]

function Bottom() {
  return <section id='bottom'>
    <h1>Shortly</h1>

    <div id='features'>
        <h1>Features</h1>
        {
            features.map(
                feature => <p key={key()}>{feature.text}</p>
            )
        }
    </div>

    <div id='resources'>
        <h1>Resources</h1>
        {
            resources.map(
                resource => <p key={key()}>{resource.text}</p>
            )
        }
    </div>

    <div id='company'>
        <h1>Company</h1>
        {
            company.map(
                link => <p key={key()}>{link.text}</p>
            )
        }
    </div>

    <div id='social-medias'>
        {
            socialMedias.map(
                socialMedia => <i key={key()} className='material-symbols-outlined'>{socialMedia.icon}</i>
            )
        }
    </div>
  </section>
}

export default Bottom