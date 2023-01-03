import styles from './movie-grid.module.css'
import classNames from 'classnames/bind'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import tmdbApi, {movieType, tvType, category as cate} from '../../api/tmdbApi'
import MovieCard from '../MovieCard'
import Button from '../Button'

const cx = classNames.bind(styles)

const MovieGrid = ({category}) => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)
  const {keyword} = useParams()

  useEffect(() => {
    const getItems = async () => {
      let response = null
      try {
        if (keyword === undefined) {
          const params = {}
          switch(category) {
            case cate.movie:     
              response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
              break
            default: 
              response = await tmdbApi.getTvList(tvType.popular, {params})
          }
        }
        else {
          const params = {query: keyword}
          response = await tmdbApi.search(category, {params})
        }

        setItems(response.results)
        setTotalPage(response.total_pages)
        console.log(response)
      }
      catch {
        console.log('error')
      }
    }

    getItems()
  }, [category, keyword])

  const loadMore = async () => {
    let response = null
      try {
        if (keyword === undefined) {
          const params = {page: page + 1}
          switch(category) {
            case cate.movie:     
              response = await tmdbApi.getMoviesList(movieType.upcoming, {params})
              break
            default: 
              response = await tmdbApi.getTvList(tvType.popular, {params})
          }
        }
        else {
          const params = {query: keyword, page: page + 1}
          response = await tmdbApi.search(category, {params})
        }

        setItems([...items, ...response.results])
        setTotalPage(response.total_pages)
        setPage(page => page + 1)
        console.log(response)
      }
      catch {
        console.log('error')
      }
  }
  return ( 
    <>
      <div className='row'>
        {items.map((item, index) => (
          <div className='col l-1-5 m-2-4 c-6 mb-3' key={index}>
            <MovieCard item={item} category={category}/>
          </div>
        ))}
      </div>

      {
        page < totalPage && (
          <div className={cx('load-more')}>
              <Button text round onClick={loadMore}>Load more</Button>
          </div>

        )
      }
    </>
   );
}
 
export default MovieGrid;