import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import tmdbApi, { category as cate, movieType, tvType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import CardItem from '../CardItem';
import Button from '../Button';
const cx = classNames.bind(styles);

const GridItem = ({category, keyword}) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState()
  const [totalPage, setTotalPage] = useState()
  // const { category, keyword } = useParams();

  useEffect(() => {
    const getItems = async () => {
      let response = null
      try {
        if (keyword) {
          const params = {params: {
            query: keyword
          }}
          response = await tmdbApi.search(category, params)
        }
        else {
          const params = {params: {}}
          switch(category) {
            case cate.movie:
              response = await tmdbApi.getMoviesList(movieType.popular, params)
              break
            default:
              response = await tmdbApi.getTvList(tvType.popular, params)
          }
        }

        setItems(response.results)
        setTotalPage(response.total_pages)
        setPage(response.page)
      }
      catch(error) {
        console.log('loi: ' + error)
      }
    }
    getItems()
  }, [category, keyword]);

  const handleLoadMore = async () => {
    let response = null
      try {
        if (keyword) {
          const params = {params: {
            query: keyword,
            page: page + 1,
          }}
          response = await tmdbApi.search(category, params)
        }
        else {
          const params = {params: {page: page + 1}}
          switch(category) {
            case cate.movie:
              response = await tmdbApi.getMoviesList(movieType.popular, params)
              break
            default:
              response = await tmdbApi.getTvList(tvType.popular, params)
          }
        }

        setItems([...items, ...response.results])
        setTotalPage(response.total_pages)
        setPage(response.page)
      }
      catch(error) {
        console.log('loi: ' + error)
      }
  }

  return (
    <>
      <div className={cx('grid')}>
        <div className={cx('row')}>
          {
            items.map((item, index) => (
              <div className={cx('col', 'c-6', 'm-3', 'l-2' )} key={index}>
                <CardItem data={item} cate={category} />
              </div>
            ))
          }
        </div>
      </div>
      {
        page < totalPage &&
        <div className={cx('container-loadmore')}>
          <Button primary onClick={handleLoadMore}>Load more</Button>
        </div>
      }
    </>
  );
};

export default GridItem;
