import styles from './sidebar.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../Button';
import { Link } from 'react-router-dom';
import { MyContext } from '../../Context';

const cx = classNames.bind(styles);

const SideBar = () => {
  const location = useLocation()
  const {active} = useContext(MyContext);
  const [activeValue, setActiveValue] = active
  const [show, setShow] = useState(false);

  const btnRef = useRef(null);

  document.addEventListener('click', (e) => {
    if (e.target.closest(`.${cx('btn-show')}`)) {
      setShow(true);
    } else setShow(false);
  });

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
      path: '/#',
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
    <div className={cx('side-bar', `${!show ? 'shrink' : ''}`)}>
      <div className={cx('sidebar-header')}>
          <div className={cx('logo')}>
            <p>
              The.<span>Movie</span>
            </p>
          </div>
          <button className={cx('btn-show')} ref={btnRef}>
            <FontAwesomeIcon icon={solid('bars')} />
          </button>
      </div>

      <div className={cx('section')}>
        <h2 className={cx('section__title')}>Menu</h2>
        <ul className={cx('section__list-item')}>
          {listNav.map((item, index) => {
            return (
              <li className={cx('section-item')} key={index}>
                <Link to={item.path} className={cx('nav-item', `${activeValue == item.path && 'active'}`)} onClick={() => setActiveValue(item.path)}>
                  <FontAwesomeIcon className={cx('nav-item__icon')} icon={item.icon} />
                  <span className={cx('nav-item__text')}>{item.content}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
