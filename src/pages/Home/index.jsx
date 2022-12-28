import styles from './home.module.css';
import classNames from 'classnames/bind';

import HeroSlice from '../../components/HeroSlide';
import MovieList from '../../components/MovieList';
import Button from '../../components/Button';
import { category, movieType, tvType } from '../../api/tmdbApi';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div>
      <HeroSlice />
      <div className="grid wide">
        <div className={cx('section', 'mb-3')}>
          <div className={cx('header')}>
            <h2 className={cx('title')}>Trending Movies</h2>
            <Button to="/movie" outline round>
              See more
            </Button>
          </div>
          <MovieList cate={category.movie} type={movieType.popular} />
        </div>
        <div className={cx('section', 'mb-3')}>
          <div className={cx('header')}>
            <h2 className={cx('title')}>Top Rated Movies</h2>
            <Button outline round>
              See more
            </Button>
          </div>
          <MovieList cate={category.movie} type={movieType.top_rated} />
        </div>
        <div className={cx('section', 'mb-3')}>
          <div className={cx('header')}>
            <h2 className={cx('title')}>Upcoming movies</h2>
            <Button outline round>
              See more
            </Button>
          </div>
          <MovieList cate={category.movie} type={movieType.upcoming} />
        </div>
        <div className={cx('section', 'mb-3')}>
          <div className={cx('header')}>
            <h2 className={cx('title')}>TV On The Air</h2>
            <Button outline round>
              See more
            </Button>
          </div>
          <MovieList cate={category.tv} type={tvType.on_the_air} />
        </div>
        <div className={cx('section', 'mb-3')}>
          <div className={cx('header')}>
            <h2 className={cx('title')}>TV Top Rate</h2>
            <Button outline round>
              See more
            </Button>
          </div>
          <MovieList cate={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </div>
  );
};

export default Home;
