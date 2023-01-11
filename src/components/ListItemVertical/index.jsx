import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import tmdbApi, { category, tvType, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Button from '../Button';

const cx = classNames.bind(styles);

const ListItemVertical = ({ cate, type }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      let response = null;
      const params = { params: {} };
      try {
        switch (cate) {
          case category.movie:
            response = await tmdbApi.getMoviesList(type, params);
            break;
          default:
            response = await tmdbApi.getTvList(type, params);
        }

        setItems(response.results.slice(1, 4));
      } catch (error) {
        console.log(error);
      }
    };

    getItems();
  }, []);

  return (
    <>
      {items.map((item, index) => (
        <Item item={item} key={index} />
      ))}

      <Button primary round className={cx('cs', 'btn')}>
        See More
      </Button>
    </>
  );
};

const Item = ({ item }) => {
  return (
    <div className={cx('item')}>
      <img className={cx('item__img')} src={apiConfig.originalImage(item.poster_path)} alt="" />
      <div className={cx('item__body')}>
        <p className={cx('item__body-name')}>{item.title || item.name}</p>
        <p className={cx('item__body-genres')}>{`${item.genre_ids[0]}, ${item.genre_ids[1]}`}</p>
        <p className={cx('item__body-vote-average')}>
          <span className={cx('icon-imdb')}>IMDb</span> {item.vote_average}
        </p>
      </div>
    </div>
  );
};

export default ListItemVertical;
