import styles from './header.module.css';
import classNames from 'classnames/bind';
import logo from '../../assets/tmovie.png';

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

const headerNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movies',
    path: '/movie',
  },
  {
    display: 'TV Series',
    path: '/tv',
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const active = headerNav.findIndex((e) => e.path === pathname);

  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add(cx('shrink'));
      } else {
        headerRef.current.classList.remove(cx('shrink'));
      }
    };

    window.addEventListener('scroll', shrinkHeader);

    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className={cx('header')}>
      <div className={cx('header__wrap', 'grid', 'wide')}>
        <div className={cx('logo')}>
          <img src={logo} alt="" />
          <Link to="/">Movies</Link>
        </div>

        <ul className={cx('header__nav')}>
          {headerNav.map((e, index) => (
            <li key={index} className={cx(`${index === active ? 'active' : ''}`)}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
