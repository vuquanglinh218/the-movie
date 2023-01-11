import styles from './styles.module.scss'
import classNames from 'classnames/bind'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import apiConfig from '../../api/apiConfig';
import Button from '../Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

const CardItem = ({data, cate}) => {
  return ( 
    <Link to={`/${cate}/${data.id}`}  className={cx('item')}>
      <div
        className={cx('item__img')}
        style={{ backgroundImage: `url(${apiConfig.originalImage(data.poster_path)})` }}
      ></div>
      <p className={cx('item__title')}>{data.title || data.name}</p>

      <div className={cx('btn-play')}>
        <Button primary round_full className={cx('cs', 'btn')}>
          <FontAwesomeIcon className={cx('icon')} icon={solid('play')} />
        </Button>
      </div>
    </Link>
   );
}
 
export default CardItem;