import styles from './movie-card.module.css'
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';

import Button from '../Button';
import apiConfig from '../../api/apiConfig';

const cx = classNames.bind(styles)

const MovieCard = ({item, category}) => {

  const imageUrl = apiConfig.w500Image(item.poster_path || item.backdrop_path)

  return ( 
    <Link to={`/${category}/` + item.id} className={cx('movie-card')}>
      <div className={cx('movie-card__image')} style={{backgroundImage: `url(${imageUrl})`}}>
        <Button primary medium round className={cx('btn', 'custom')}>
          <i className='bx bx-play'></i>
        </Button>
      </div>

      <p className={cx('movie-card__title')}>{item.title || item.original_name}</p>
    </Link>
   );
}
 
export default MovieCard;