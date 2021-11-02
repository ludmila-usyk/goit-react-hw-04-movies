import { NavLink } from 'react-router-dom';
import s from "./Navigation.module.css";
// import routes from '../routes/routes';
// import {HomePage} from '../pages/HomePage/HomePage.js';
// import {MoviesPage} from '../pages/MoviesPage/MoviesPage.js';

export default function Navigation() {
    return (
    <nav>
      <ul className={s.list}>
        {/* <ul style={{color: "red"}}> */}
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
