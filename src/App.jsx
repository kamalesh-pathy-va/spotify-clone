import { useSelector } from 'react-redux';
import './App.css'

import { Sidenav } from './components/Sidenav';

function App() {
  const sidenavCollpsed = useSelector(state => state.sidenav.collapsed);
  const navWidth = 20;
  const description = 0;
  let style = {};

  if (navWidth < 20 || sidenavCollpsed) {
    style = {
      "--nav-width": `${navWidth}%`,
      "--song-dec-width": `${description}%`,
      "grid-template-columns": "100px calc(100% - 100px - var(--song-dec-width)) var(--song-dec-width)"
    }
  } else {
    style = {
      "--nav-width": `${navWidth}%`,
      "--song-dec-width": `${description}%`,
    }
  }

  return (
    <div className="App grid gap-2 custom-colum-width overflow-hidden text-l font-bold text-neutral-200" style={style}>
      <Sidenav />
      <div className="col-start-2">Main</div>
      <div>Song info and next in queue</div>
      <div className='text-center col-span-3 w-full bg-red-400 h-16'>audio player</div>
    </div>
  )
}

export default App
