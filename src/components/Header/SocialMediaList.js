import SocialMediaListItems from './SocialMediaListItems'

export default function SocialMediaList (props) {
  
  const { socialMedia } = props;

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