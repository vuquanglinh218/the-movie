import sytles from './hero-slider.module.scss';
import classNames from 'classnames/bind';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Button from '../Button';

const cx = classNames.bind(sytles);

const HeroSlider = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const getItems = async () => {
      setLoading(true)
      let response = null;
      const params = { params: {} };
      try {
        response = await tmdbApi.getMoviesList('upcoming', params);
      } catch (error) {
        console.log(error);
      }
      setItems(response.results.slice(1, 5));
      setLoading(false)
    };

    getItems();
  }, []);

  return (
    <div className={cx('wrapper')}>
      {
        loading && <p style={{color: 'white'}}>Loading...</p>
      }
      <Swiper
        modules={[Autoplay, EffectCards, Thumbs]}
        centeredSlides={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        speed={500}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={cx('mySwiper')}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => <HeroSliceItem item={item} className={cx(`${isActive ? 'active' : ''}`)} />}
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Autoplay, EffectCards, Thumbs]}
        centeredSlides={true}
        onSwiper={setThumbsSwiper}
        slidesPerView={3}
        spaceBetween={10}
        speed={500}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={cx('mySwiper2')}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => <ThumbsItem item={item} className={cx(`${isActive ? 'active' : ''}`)} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSliceItem = ({ item, className }) => {
  return (
    <div
      className={cx('hero-slider-item')}
      style={{ backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path)})` }}
    >
      <div className={cx('content')}>
        <h1 className={cx('name')}>{item.title}</h1>
        <p className={cx('genres')}>{item.genre_ids[0]}</p>
        <div className={cx('btn-section')}>
          <Button className={cx('cs', 'btn')} lg primary round>
            Watch
          </Button>
          <Button className={cx('cs', 'btn')} lg outline round>
            Trailer
          </Button>
        </div>
      </div>
    </div>
  );
};

const ThumbsItem = ({ item, className }) => {
  return <img className={cx('thumb-item', className)} src={apiConfig.originalImage(item.backdrop_path)} />;
};

export default HeroSlider;
