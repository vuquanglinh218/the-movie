import classNames from 'classnames/bind';
import styles from './detail.module.css';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MovieList from '../../components/MovieList';

const cx = classNames.bind(styles);

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null)

  useEffect(() => {
    
  },[])

  return (
    <div className={cx('grid', 'wide')}>
      <div className='header'>

      </div>
      <MovieList cate={category} id={id} type="similar" />
    </div>
  );
};

export default Detail;
