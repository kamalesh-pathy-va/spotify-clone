import './App.css'

import { Sidenav } from './components/Sidenav';

function App() {
  const navWidth = 20;
  const description = 0;

  return (
    <div className="App grid gap-4 custom-colum-width overflow-clip text-l font-bold text-neutral-200" style={{
      "--nav-width": `${navWidth<20? 7: navWidth}%`,
      "--song-dec-width": `${description}%`
    }}>
      <Sidenav />
      <div className="col-start-2">Main</div>
      <div>Song info and next in queue</div>
      <div className='text-center fixed bottom-0 w-full'>audio player</div>
    </div>
  )
}

export default App
