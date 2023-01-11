import styles from './header.module.scss';
import classNames from 'classnames/bind';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import Button from '../Button';
import Images from '../../access/images';

const cx = classNames.bind(styles);

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);
  const [menuActive, setMenuActive] = useState(false);
  const [input, setInput] = useState('');
  // const [category] = useParams();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && input !== '') {
      navigate(`/${'movie'}/search/${input}`);
    }
  };

  const listNav = [
    {
      path: '/',
      content: 'Browser',
      icon: solid('compass'),
    },
    {
      path: '/movie',
      content: 'Movies',
      icon: solid('film'),
    },
    {
      path: '/tv',
      content: 'TV Shows',
      icon: solid('desktop'),
    },
    {
      path: '/wathlist',
      content: 'Watchlist',
      icon: solid('heart'),
    },
    {
      path: '/#',
      content: 'Coming Soon',
      icon: solid('calendar-days'),
    },
  ];
  return (
    <header>
      <p className={cx('navigate-title')}>Home</p>

      <button className={cx('menu__btn')} onClick={() => setMenuActive(!menuActive)}>
        <FontAwesomeIcon icon={solid('bars')} />
      </button>

      <ul className={cx('menu__list', `${menuActive ? 'menu__active' : ''}`)}>
        {listNav.map((item, index) => {
          return (
            <li className={cx('section-item')} key={index}>
              <Link
                to={item.path}
                className={cx('nav-item', `${active == item.path && 'active'}`)}
                onClick={() => setActive(item.path)}
              >
                {/* <FontAwesomeIcon className={cx('nav-item__icon')} icon={item.icon} /> */}
                <span className={cx('nav-item__text')}>{item.content}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className={cx('search-bar')}>
        <FontAwesomeIcon className={cx('search-bar__icon')} icon={solid('magnifying-glass')} />
        <input
          className={cx('search-bar__input')}
          type="text"
          placeholder="Search everything"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleSearch(e)}
        />
        <FontAwesomeIcon className={cx('search-bar__icon')} icon={solid('sliders')} />
      </div>
    </header>
  );
};

export default Header;
