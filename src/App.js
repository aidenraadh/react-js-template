import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary'
import Navigations from './components/Navigations'

import CardsPage from './components/pages/CardsPage'
import SVGIconsPage from './components/pages/SVGIconsPage'

function App() {
  const [sidebarShown, setSidebarShown] = useState(false)
  return (
    <ErrorBoundary>       
      <BrowserRouter>
        <Navigations
          sidebarShown={sidebarShown}
          toggleSidebar={setSidebarShown}
          sidebarItems={[
            {icon: 'layers', text: 'Cards', link: '/'},
            {icon: 'layers', text: 'SVG Icons', link: '/svg-icons'},
          ]}
        />            
        <div id='app'>
          <Routes>
            <Route path='/' exact element={<CardsPage/>}/>
            <Route path='/svg-icons' exact element={<SVGIconsPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
