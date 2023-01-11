import styles from './only-header.module.scss'
import classNames from 'classnames/bind';

import Header from "../../components/Header";
import Footer from '../../components/Footer';

const cx = classNames.bind(styles)

const OnlyHeader = ({children}) => {
  return ( 
    <>
      <Header/>
      <div className={cx('wrapper')}>
        {children}
      </div>
      <Footer/>
    </>
   );
}
 
export default OnlyHeader;