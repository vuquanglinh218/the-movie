import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

const cx = classNames.bind(styles);

const HeaderAndSidebar = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <SideBar />
        {children}
      </div>
    </>
  );
};

export default HeaderAndSidebar;
