import { useParams } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/MovieGrid";
import SearchInput from "../components/SearchInput";

const Catalog = () => {
  const {category} = useParams()
  return (
    <>
      <PageHeader>
        {category === cate.movie? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className={'grid wide'}>
        <SearchInput category={category}/>
        <MovieGrid category={category}/>
      </div>
    </> 
   );
}
 
export default Catalog;