import styles from './catalog.module.scss';
import classNames from 'classnames/bind';

import { useParams } from 'react-router-dom';
import GridItem from '../../components/GridItem';

const cx = classNames.bind(styles)

const Catalog = () => {
  const { category, keyword } = useParams();
  return (
    <div className={cx('container')}>
      <GridItem category={category} keyword={keyword} />
    </div>
  );
};

export default Catalog;
