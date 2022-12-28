import { useParams } from "react-router-dom";

import PageHeader from "../components/PageHeader";
import { category as cate } from "../api/tmdbApi";

const Catalog = () => {
  const {category} = useParams()
  return (
    <>
      <PageHeader>
        {category === cate.movie? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className={'grid wide'}>
        
      </div>
    </> 
   );
}
 
export default Catalog;