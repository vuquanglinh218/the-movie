import styles from './search-input.module.css';
import classNames from 'classnames/bind';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Button from '../Button';

const cx = classNames.bind(styles);

const SearchInput = ({category}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input !== '') {
      navigate(`/${category}/search/${input}`)
    } else {
      navigate(`/${category}`)
    }
  }
  return (
    <div className={cx('input-search')}>
      <input className={cx('input')} type="text" placeholder="keyword" onChange={(e) => setInput(e.target.value)} onKeyUp={handleSearch} value={input}/>
      <Button className={cx('custom', 'btn')}  primary round onClick={handleSearch}>search</Button>
    </div>
  );
};

export default SearchInput;
