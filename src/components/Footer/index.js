import styles from './footer.module.css';
import classNames from 'classnames/bind';
import logo from '../../assets/tmovie.png'
import bg from '../../assets/footer-bg.jpg'

import { Link } from 'react-router-dom';


const cx = classNames.bind(styles)


const Footer = () => {
  return ( 
    <div style={{backgroundImage: `url(${bg})`}} className={cx('footer')}>
      <div className={cx('logo')}>
        <img src={logo}/>
        <Link to='/'>Movies</Link>
      </div>

      <div className={cx('footer__content__menus')}>
        <div className={cx('footer__content__menu')}>
          <Link to='/'>Home</Link>
          <Link to='/'>Contact us</Link>
          <Link to='/'>Term of services</Link>
          <Link to='/'>About us</Link>
        </div>
        <div className={cx('footer__content__menu')}>
          <Link to='/'>Live</Link>
          <Link to='/'>FAQ</Link>
          <Link to='/'>Premium</Link>
          <Link to='/'>Privacy policy</Link>
        </div>
        <div className={cx('footer__content__menu')}>
          <Link to='/'>You must watch</Link>
          <Link to='/'>Recent release</Link>
          <Link to='/'>Top IMDB</Link>
        </div>
      </div>
    </div>
   );
}
 
export default Footer;