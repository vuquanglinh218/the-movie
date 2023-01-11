import styles from './right-side-bar.module.scss'
import classNames from 'classnames/bind';

import tmdbApi, { category, tvType, movieType } from '../../api/tmdbApi'
import ListItemVertical from '../ListItemVertical';

const cx = classNames.bind(styles)

const RightSideBar = () => {
  return ( 
    <div className={cx('right-sidebar')}>
      <div className={cx('section')}>
        <p className={cx('section-title')}>Popular Movies</p>
        <ListItemVertical cate={category.movie} type={movieType.upcoming} />
      </div>

      <div className={cx('section')}>
        <p className={cx('section-title')}>Popular Movies</p>
        <ListItemVertical cate={category.tv} type={tvType.onTheAir} />
      </div>
    </div>
   );
}

export default RightSideBar;