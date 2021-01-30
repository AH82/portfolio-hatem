import SocialMediaListItems from './SocialMediaListItems'

export default function SocialMediaList (props) {

  const socialMedia = [
    { name: "linkedIn", url: "https://www.linkedin.com/in/hatem-deux/" },
    { name: "gitHub", url: "https://github.com/AH82" }
  ];

  return (
    <div className='social-media'>
      {
        socialMedia.map( (elem) => (
          <SocialMediaListItems name={elem.name} url={elem.url}/>
        ))
      }
    </div>
  )
}