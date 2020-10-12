import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/icons/logo-me.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as Dashboard } from '../../assets/icons/dashboard.svg';
import { ReactComponent as Favorites } from '../../assets/icons/favorites.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Settings } from '../../assets/icons/settings.svg';

import { toggleNav } from '../../Store/Actions/navActions';

const Navbar = () => {
  const isOpen = useSelector((state) => state.nav.isOpen);
  const dispatch = useDispatch();

  return (
    <div className={isOpen ? 'navbar-container open' : 'navbar-container'}>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <div
                className={isOpen ? 'navbar__logo open' : 'navbar__logo close'}
              >
                <Logo />
                <h1>Menu</h1>
              </div>
            </Link>
          </li>

          <div className={isOpen ? 'navbar__menu open' : 'navbar__menu close'}>
            <li>
              <NavLink exact className="navbar__link" to="/">
                <Dashboard />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/favorites">
                <Favorites />
                <span>Favorites</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/user">
                <User />
                <span>User</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to="/settings">
                <Settings />
                <span>Settings</span>
              </NavLink>
            </li>
          </div>

          <Arrow
            className={isOpen ? 'navbar__toggleBtn' : 'navbar__toggleBtn close'}
            onClick={(e) => dispatch(toggleNav(!isOpen))}
          />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
