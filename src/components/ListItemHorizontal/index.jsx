import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import apiConfig from '../../api/apiConfig';
import tmdbApi, { category } from '../../api/tmdbApi';
import Button from '../Button';
import CardItem from '../CardItem';

const cx = classNames.bind(styles);

const ListItemHorizontal = ({ cate, type, id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      let response = null;
      const params = { params: {} };
      try {
        if (id) {
          response = await tmdbApi.similar(cate, id);
        } else {
          switch (cate) {
            case category.movie:
              response = await tmdbApi.getMoviesList(type, params);
              break;
            default:
              response = await tmdbApi.getTvList(type, params);
          }
        }
      } catch (error) {
        console.log(error);
      }
      console.log(response)
      setItems(response.results);
    };

    getItems();
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={6.5}
        spaceBetween={15}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4.5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6.5,
            spaceBetween: 15,
          },
        }}
        className="mySwiper1"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <CardItem data={item} cate={cate} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ListItemHorizontal;
