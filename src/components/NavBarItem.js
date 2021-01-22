import './NavBarItem.css'

export default function NavBarItem (props) {
  const { name } = props;
  return (
    <button className='nav-btn' >
      {name}
    </button>
  )
};