import { Link } from "react-router-dom";

import './NavBarItem.css';


export default function NavBarItem (props) {
  const { tabTitle, route } = props;
  return (
    <Link to={route} className='nav-btn'>
        {tabTitle}
    </Link>
  )
};