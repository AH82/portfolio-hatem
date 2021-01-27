import { NavLink } from "react-router-dom";

import './NavBarItem.css';


export default function NavBarItem (props) {
  const { tabTitle, route } = props;
  return (
    <NavLink to={route} exact className='nav-btn' activeClassName='nav-btn-current'>
        {tabTitle}
    </NavLink>
  )
};