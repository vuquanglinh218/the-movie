import styles from './home.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import Button from '../../components/Button';
import HeroSlider from '../../components/HeroSlider';
import ListItemHorizontal from '../../components/ListItemHorizontal';
import { category, movieType, tvType } from '../../api/tmdbApi';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx('home-container')}>
      <HeroSlider />
      <div className={cx('section')}>
        <div className={cx('section__header')}>
          <p className={cx('section__title')}>Upcoming</p>
          <Button className={cx('cs', 'btn')} text rightIcon={<FontAwesomeIcon icon={solid('chevron-right')}/>}>View more</Button>
        </div>
        <ListItemHorizontal cate={category.movie} type={movieType.upcoming} />
      </div>

      <div className={cx('section')}>
        <div className={cx('section__header')}>
          <p className={cx('section__title')}>Now Playing</p>
          <Button className={cx('cs', 'btn')} text rightIcon={<FontAwesomeIcon icon={solid('chevron-right')}/>}>View more</Button>
        </div>
        <ListItemHorizontal cate={category.movie} type={movieType.nowPlaying} />
      </div>

      <div className={cx('section')}>
        <div className={cx('section__header')}>
          <p className={cx('section__title')}>Popular</p>
          <Button className={cx('cs', 'btn')} text rightIcon={<FontAwesomeIcon icon={solid('chevron-right')}/>}>View more</Button>
        </div>
        <ListItemHorizontal cate={category.movie} type={movieType.popular} />
      </div>

      <div className={cx('section')}>
        <div className={cx('section__header')}>
          <p className={cx('section__title')}>Top Rates</p>
          <Button className={cx('cs', 'btn')} text rightIcon={<FontAwesomeIcon icon={solid('chevron-right')}/>}>View more</Button>
        </div>
        <ListItemHorizontal cate={category.movie} type={movieType.topRates} />
      </div>
    </div>
  );
};

export default Home;
