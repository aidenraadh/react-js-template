import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary'
import Navigations from './components/Navigations'

import CardsPage from './components/pages/CardsPage'
import ButtonsPage from './components/pages/ButtonsPage'
import FormsPage from './components/pages/FormsPage'
import WindowsPage from './components/pages/WindowsPage'
import SVGIconsPage from './components/pages/SVGIconsPage'
import TablePage from './components/pages/TablePage'

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
            {icon: 'layers', text: 'Buttons', link: '/buttons'},
            {icon: 'layers', text: 'Forms', link: '/forms'},
            {icon: 'layers', text: 'Windows', link: '/windows'},
            {icon: 'layers', text: 'Table', link: '/table'},
            {icon: 'layers', text: 'SVG Icons', link: '/svg-icons'},
          ]}
        />            
        <div id='app'>
          <Routes>
            <Route path='/' exact element={<CardsPage/>}/>
            <Route path='/buttons' exact element={<ButtonsPage/>}/>
            <Route path='/forms' exact element={<FormsPage/>}/>
            <Route path='/windows' exact element={<WindowsPage/>}/>
            <Route path='/table' exact element={<TablePage/>}/>
            <Route path='/svg-icons' exact element={<SVGIconsPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
