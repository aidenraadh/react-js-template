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
import MiscellaneousPage from './components/pages/MiscellaneousPage'

const navigations = [
  {icon: 'blocks', text: 'Cards', path: '/'},          
  {icon: 'export', text: 'Buttons', path: '/buttons'},
  {icon: 'write', text: 'Forms', path: '/forms'},
  {icon: 'share', text: 'Windows', path: '/windows'},
  {icon: 'clipboard_list', text: 'Table', path: '/table'},
  {icon: 'other', text: 'Miscellaneous', path: '/miscellaneous'},
  {icon: 'image', text: 'SVG Icons', path: '/svg-icons'},  
]

function App() {
  const [sidebarShown, setSidebarShown] = useState(false)
  return (
    <ErrorBoundary>       
      <BrowserRouter>
        <Navigations
          sidebarShown={sidebarShown}
          toggleSidebar={setSidebarShown}
          sidebarItems={navigations}
          pageHeadings={navigations.map(nav => ({
            title: nav.text, icon: nav.icon, path: nav.path
          }))}
        />            
        <div id='app'>
          <Routes>
            <Route path='/' exact element={<CardsPage/>}/>
            <Route path='/buttons' exact element={<ButtonsPage/>}/>
            <Route path='/forms' exact element={<FormsPage/>}/>
            <Route path='/windows' exact element={<WindowsPage/>}/>
            <Route path='/table' exact element={<TablePage/>}/>
            <Route path='/miscellaneous' exact element={<MiscellaneousPage/>}/>
            <Route path='/svg-icons' exact element={<SVGIconsPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
