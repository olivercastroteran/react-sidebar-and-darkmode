import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo-me.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as Dashboard } from '../../assets/icons/dashboard.svg';
import { ReactComponent as Favorites } from '../../assets/icons/favorites.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Settings } from '../../assets/icons/settings.svg';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <div className="navbar__logo">
                <Logo />
              </div>
            </Link>
          </li>

          <div className="navbar__menu">
            <li>
              <NavLink exact className="navbar__link" to="/">
                <Dashboard />
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/favorites">
                <Favorites />
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/user">
                <User />
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/settings">
                <Settings />
              </NavLink>
            </li>
          </div>

          <Arrow className="navbar__toggleBtn" />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
