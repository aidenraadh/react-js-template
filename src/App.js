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
  {icon: 'other_square', text: 'Miscellaneous', path: '/miscellaneous'},
  {icon: 'image', text: 'SVG Icons', path: '/svg-icons'},  
]

function App() {
  const [sidebarShown, setSidebarShown] = useState(false)
  const [pageHeading, setPageHeading] = useState({title: '', icon: ''})

  return (
    <ErrorBoundary>       
      <BrowserRouter>
        <Navigations
          pageHeading={pageHeading}
          sidebarShown={sidebarShown}
          toggleSidebar={setSidebarShown}
          sidebarItems={navigations}
        />            
        <div id='app'>
          <Routes>
            <Route path='/' exact element={
              <CardsPage setPageHeading={setPageHeading}/>
            }/>
            <Route path='/buttons' exact element={
              <ButtonsPage setPageHeading={setPageHeading}/>
            }/>
            <Route path='/forms' exact element={
              <FormsPage setPageHeading={setPageHeading}/>
            }/>
            <Route path='/windows' exact element={
              <WindowsPage setPageHeading={setPageHeading}/>
            }/>
            <Route path='/table' exact element={
              <TablePage setPageHeading={setPageHeading}/>
            }/>
            <Route path='/miscellaneous' exact element={
              <MiscellaneousPage setPageHeading={setPageHeading}/>
            }/>
            <Route path='/svg-icons' exact element={
              <SVGIconsPage setPageHeading={setPageHeading}/>
            }/>
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
