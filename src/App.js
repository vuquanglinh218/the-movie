import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { publicRouter } from './config/RouterConfig';
import { DefaultLayout } from './layouts';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
