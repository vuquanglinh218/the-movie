import styles from './movie-list.module.css';
import classNames from 'classnames/bind';
import '../../assets/boxicons-2.0.7/css/boxicons.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import tmdbApi, { category } from '../../api/tmdbApi';
import MovieCard from '../MovieCard';

const cx = classNames.bind(styles);

const MovieList = ({ cate, type, id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};
      try {
        if (type !== 'similar') {
          switch (cate) {
            case category.movie:
              response = await tmdbApi.getMoviesList(type, { params });
              break;
            default:
              response = await tmdbApi.getTvList(type, { params });
          }
        } else {
          response = await tmdbApi.similar(cate, id);
        }

        setItems(response.results);
      } catch {
        console.log('error');
      }
    };

    getList();
  }, []);

  return (
    <Swiper
      slidesPerView={7.5}
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4.5,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 7.7,
          spaceBetween: 10,
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <MovieCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieList;
