import React from 'react';

export default function Contacts(props) {

  const { localePageHeadings, lang } = props;

  // const linkedin = () => (<a href='https://www.linkedin.com/in/hatem-deux/'>LinkedIn</a>)
  const content = {
    fr: {
      // message: [`Pour le moment, vous pouvez me contacter sur mon compte de `, linkedin(), `.`]
      message: `Pour le moment, vous pouvez me contacter sur mon compte de LinkedIn.`
    },
    en: {
      // message: [`For the time being, you can contact me on my `, linkedin(), ` account.`]
      message: `For the time being, you can contact me on my LinkedIn account.`
    }
  }
  
  return (
    <div 
      key={'contact-'+lang} 
      className='main-page'
      >

      <h1 
        key={'contact-heading-'+lang}
        >
        {localePageHeadings[lang].contact}
      </h1>

      <p 
        key={'contact-content-'+lang}
        >
        {content[lang].message.split(/linkedin/i)[0]}
        <a href='https://www.linkedin.com/in/hatem-deux/'>LinkedIn</a>
        {content[lang].message.split(/linkedin/i)[1]}
      </p>

    </div>
  )
}
