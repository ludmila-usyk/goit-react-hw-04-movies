import { NavLink } from 'react-router-dom';
import s from "./Navigation.module.css";


export default function Navigation() {
    return (
    <nav>
      <ul className={s.list}>
        <li>
        <NavLink
          exact 
          className={s.Link}
          activeClassName={s.ActiveLink}
            to="/"
        >Home</NavLink>
        </li>
        <li>
        <NavLink 
          className={s.Link}
          activeClassName={s.ActiveLink}
            to="/movies"
        >Movies</NavLink>
        </li>
      </ul>
    </nav>
);
};
