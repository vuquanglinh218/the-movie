import styles from './default-layout.module.scss'
import classNames from 'classnames/bind';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import RightSideBar from '../../components/RightSideBar';

const cx = classNames.bind(styles)

const DefaultLayout = ({children}) => {
  return ( 
    <>
      <div className={cx('wraper')}>
        <SideBar/>
        <div className={cx('content', 'col')}>
          <Header/>
          {children}
        </div>
        <RightSideBar/>
      </div>
    </>
   );
}
 
export default DefaultLayout;