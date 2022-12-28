import styles from './hero-slide.module.css';
import classNames from 'classnames/bind';
import 'swiper/css';
import 'swiper/css/bundle';

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Button from '../Button';
import Modal from '../Modal';

const cx = classNames.bind(styles);
const HeroSlice = () => {
  const [movieItems, setMovieItem] = useState([]);
  const ModalElement = useRef(null);
  const ModalIframe = useRef(null);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovieItem(response.results.slice(1, 6));
      } catch {
        console.log('error');
      }
    };
    getMovies();
  }, []);

  const handleClose = () => {
    ModalIframe.current.setAttribute('src', '');
  };
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        speed={500}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {movieItems.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <HeroSliceItem
                ModalElement={ModalElement}
                Iframe={ModalIframe}
                item={item}
                className={cx(`${isActive ? 'active' : ''}`)}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal ModalElement={ModalElement} onClose={handleClose}>
        <div className={cx('iframe__wrapper')}>
          <iframe ref={ModalIframe}></iframe>
        </div>
      </Modal>
    </>
  );
};

const HeroSliceItem = ({ item, className, ModalElement, Iframe }) => {
  const background = apiConfig.originalImage(item.backdrop_path);
  const poster = apiConfig.originalImage(item.poster_path);

  const navigate = useNavigate();

  const handleShowModal = async () => {
    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      Iframe.current.setAttribute('src', videoSrc);
    }
    ModalElement.current.style.display = 'flex';
  };

  return (
    <div style={{ backgroundImage: `url(${background})` }} className={cx('hero-slice__wrapper', className)}>
      <div className={cx('hero-slice__container', 'grid', 'wide')}>
        <div className={cx('hero-slice__content')}>
          <h1 className={cx('title')}>{item.title}</h1>
          <p className={cx('overview')}>{item.overview}</p>
          <div className={cx('btns')}>
            <Button primary round onClick={() => navigate('/movie/' + item.id)}>
              Watch now
            </Button>
            <Button outline round onClick={handleShowModal}>
              Watch trailer
            </Button>
          </div>
        </div>
        <img className={cx('hero-slice__poster')} src={poster} alt="" /> 
      </div>
    </div>
  );
};

export default HeroSlice;
