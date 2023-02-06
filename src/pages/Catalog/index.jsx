import styles from './catalog.module.scss';
import classNames from 'classnames/bind';

import { useParams } from 'react-router-dom';
import GridItem from '../../components/GridItem';
import { MyContext } from '../../Context';
import { useEffect, useContext } from 'react';

const cx = classNames.bind(styles);

const Catalog = () => {
  const { titleHeader } = useContext(MyContext);
  const [titleHeaderValue, setTitleHeaderValue] = titleHeader;
  const { category, keyword } = useParams();

  useEffect(() => {
    const setHeaderTitle = () => {
      if (keyword) {
        setTitleHeaderValue('Search');
      } else {
        switch (category) {
          case 'movie':
            setTitleHeaderValue('Movie');
            break;
          case 'tv':
            setTitleHeaderValue('TV');
            break;
        }
      }
    };
    console.log(category);
    setHeaderTitle();
  });
  return (
    <div className={cx('container')}>
      <GridItem category={category} keyword={keyword} />
    </div>
  );
};

export default Catalog;
