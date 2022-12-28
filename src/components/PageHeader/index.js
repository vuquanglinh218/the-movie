import styles from './page-header.module.css';
import classNames from 'classnames/bind';
import bg from '../../assets/footer-bg.jpg'

const cx = classNames.bind(styles)

const PageHeader = ({children}) => {
  return <div className={cx('header')} style={{backgroundImage: `url(${bg})`}}>
    <p className={cx('header-content')}>
      {children}
    </p>
  </div>;
};

export default PageHeader;
