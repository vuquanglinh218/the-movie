import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Button from '../../components/Button';
import ListItemHorizontal from '../../components/ListItemHorizontal';

const cx = classNames.bind(styles);

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState();
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const params = { params: {} };
      let response = null;
      try {
        response = await tmdbApi.detail(category, id, params);
      } catch (error) {
        console.log(error);
      }
      setItem(response);
    };
    getItem();
  }, [category, id]);
  return (
    <div className={cx('wrapper')}>
      {item && (
        <>
          <div
            className={cx('item')}
            style={{
              backgroundImage: `linear-gradient(180deg, transparent, #0f0f0f 400px), url(${apiConfig.originalImage(
                item.backdrop_path,
              )})`,
            }}
          >
            <div className={cx('content')}>
              <div className={cx('content__avatar')}>
                <img className={cx('content__img')} src={apiConfig.originalImage(item.poster_path)} />
                <div className={cx('content__rating')}>
                  <div className={cx('ring')} style={{backgroundImage: `conic-gradient(#f43f5e ${item.vote_average * 36}deg, #333 0deg)`}}>
                    <p>{item.vote_average.toFixed(1)}</p>
                  </div>
                  <p className={cx('rating__votes')}>{item.vote_count} <span>votes</span></p>
                </div>
              </div>

              <div className={cx('content__detail')}>
                <h1 className={cx('content__title')}>{item.title}</h1>
                <p className={cx('content__line-text')}>
                  <span>Original title: </span>
                  {item.original_title}
                </p>
                <p className={cx('content__line-text')}>
                  <span>Release date: </span>
                  {item.release_date}
                </p>
                <div className={cx('content__btn')}>
                  <Button primary round_full lg rightIcon={<FontAwesomeIcon icon={solid('play')}/>}>
                    Wath trailer
                  </Button>
                </div>
                <p className={cx('content__paragraphy')}>{item.overview}</p>
              </div>

              <div className={cx('content__cast')}>cast crew</div>
            </div>
            <div className={cx('section')}>
              <div className={cx('section__header')}>
                <p className={cx('section__title')}>Top Rates</p>
                <Button className={cx('cs', 'btn')} text rightIcon={<FontAwesomeIcon icon={solid('chevron-right')}/>}>View more</Button>
              </div>
              <ListItemHorizontal cate={category} id={id} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
