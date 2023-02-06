import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRouter } from './config/RouterConfig';
import { DefaultLayout } from './layouts';
import Context from './Context';

function App() {
  return (
    <BrowserRouter>
    <Context>
      <Routes>
        {
          publicRouter.map((item, index) => {
            let Layout = DefaultLayout
            let Page = item.element
            if (item.layout == null) {
              Layout = <></>
            }
            else {
              Layout = item.layout
            }
            return (
              <Route key={index} path={item.path} element={<Layout><Page/></Layout>}/>
            )
          })
        }
      </Routes>
    </Context>
    </BrowserRouter>
  );
}

export default App;
