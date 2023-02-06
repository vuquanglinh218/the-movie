import styles from './styles.module.scss'
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import tmdbApi from '../../api/tmdbApi';

const cx = classNames.bind(styles)

const ListVideo = ({cate, id}) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const getListVideo = async () => {
      try {
        let response = null;
        response = await tmdbApi.getVideos(cate, id)
        setVideos(response.results.slice(0, 3))
      }
      catch(error) {
        console.log(error)
      }
    }

    getListVideo()
  }, [cate, id])
  return ( 
    <>
      {videos.map((video, index) => (
        <VideoItem data={video} key={index}/>
      ))}
    </>
   );
}
 
const VideoItem = ({data}) => {
  const iframe = useRef(null)

  useEffect(() => {
    // const height = iframe.current.offsetWidth * 9 / 16 + 'px'
    // iframe.current.setAttribute('height', height)
  }, [])
  return (
    <>
      <p className={cx('video__title')}>{data.name}</p>
      <div className={cx('video')}>
        <iframe
          src={`https://www.youtube.com/embed/${data.key}`}
          ref={iframe}
        ></iframe>
      </div>
    </>
  )
}

export default ListVideo;