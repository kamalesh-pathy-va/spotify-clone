import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Sidenav } from './components/Sidenav';
import { ArtistPage, ErrorPage, HomePage, SearchPage, SongListPage } from './pages';
import { useEffect, useRef } from 'react';
import { useElementSize } from './hooks/useElementSize';
import { setSize, setScroll } from './features/main/mainSlice';
import { useElementScroll } from './hooks/useElementScroll';

function App() {
  const mainRef = useRef();

  const { height: mainHeight, width: mainWidth } = useElementSize(mainRef);
  const { top: positionTop, left } = useElementScroll(mainRef)
  
  const dispatch = useDispatch()

  const sidenavCollpsed = useSelector(state => state.sidenav.collapsed);

  const navWidth = 20;
  const description = 0.5;

  let style = {};

  if (navWidth < 20 || sidenavCollpsed) {
    style = {
      "--nav-width": `${navWidth}%`,
      "--song-dec-width": `${description}%`,
      "--content-with": "auto",
      "grid-template-columns": "100px var(--content-with) var(--song-dec-width)"
    }
  } else {
    style = {
      "--nav-width": `${navWidth}%`,
      "--song-dec-width": `${description}%`,
      "--content-with": "auto",
      "grid-template-columns": ` max(var(--nav-width), 320px) var(--content-with) var(--song-dec-width)`
    }
  }

  // Update the main content's dimension in redux store on resize
  useEffect(() => {
    dispatch(setSize({width: mainWidth, height: mainHeight}))
  }, [mainWidth])

  useEffect(() => {
    dispatch(setScroll({ top: positionTop, left }))
  }, [positionTop])

  return (
    <Router>
      <div className="App grid gap-2 custom-colum-width text-l font-bold text-neutral-200" style={style}>
        <Sidenav />
        <div ref={mainRef} className={`${description<1 && 'col-span-2'} mt-2 rounded-md w-full min-w-[450px] overflow-y-auto hide-scrollbar bg-neutral-900`}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/playlist/:listid' element={<SongListPage />} />
            <Route path='/album/:listid' element={<SongListPage pagetype='album' />} />
            <Route path='/artist/:artistid' element={<ArtistPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
        <div className={`${description < 1 && 'hidden'}`}>Song info and next in queue</div>
        <div className='text-center col-span-3 w-full bg-red-400 h-16'>audio player</div>
      </div>
    </Router>
  )
}

export default App
