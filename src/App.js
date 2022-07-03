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

function App() {
  const [sidebarShown, setSidebarShown] = useState(false)
  return (
    <ErrorBoundary>       
      <BrowserRouter>
        <Navigations
          sidebarShown={sidebarShown}
          toggleSidebar={setSidebarShown}
          sidebarItems={[
            {icon: 'blocks', text: 'Cards', link: '/'},          
            {icon: 'export', text: 'Buttons', link: '/buttons'},
            {icon: 'write', text: 'Forms', link: '/forms'},
            {icon: 'share', text: 'Windows', link: '/windows'},
            {icon: 'clipboard_list', text: 'Table', link: '/table'},
            {icon: 'other', text: 'Miscellaneous', link: '/miscellaneous'},
            {icon: 'image', text: 'SVG Icons', link: '/svg-icons'},
          ]}
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
