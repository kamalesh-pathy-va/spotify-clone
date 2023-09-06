import { useSelector } from 'react-redux';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Sidenav } from './components/Sidenav';
import { HomePage, SearchPage } from './pages';

function App() {
  const sidenavCollpsed = useSelector(state => state.sidenav.collapsed);
  const navWidth = 20;
  const description = 0.5;
  let style = {};

  if (navWidth < 20 || sidenavCollpsed) {
    style = {
      "--nav-width": `${navWidth}%`,
      "--song-dec-width": `${description}%`,
      // "--content-with": "calc(100% - 100px - var(--song-dec-width))",
      "--content-with": "auto",
      "grid-template-columns": "100px var(--content-with) var(--song-dec-width)"
    }
  } else {
    style = {
      "--nav-width": `${navWidth}%`,
      "--song-dec-width": `${description}%`,
      // '--content-with': 'calc(100vw - var(--nav-width) - var(--song-dec-width))',
      "--content-with": "auto",
      "grid-template-columns": ` max(var(--nav-width), 320px) var(--content-with) var(--song-dec-width)`
    }
  }

  return (
    <Router>
      <div className="App grid gap-2 custom-colum-width text-l font-bold text-neutral-200" style={style}>
        <Sidenav />
        <div className={`${description<1 && 'col-span-2'} mt-2 rounded-md w-full overflow-y-auto hide-scrollbar`}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
          </Routes>
        </div>
        <div className={`${description < 1 && 'hidden'}`}>Song info and next in queue</div>
        <div className='text-center col-span-3 w-full bg-red-400 h-16'>audio player</div>
      </div>
    </Router>
  )
}

export default App
