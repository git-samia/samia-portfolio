import { useState } from 'react'
import SplashCursor from './components/SplashCursor'
import PixelSnow from './components/PixelSnow'
import GooeyNav from './components/GooeyNav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const pages = {
  home: Home,
  projects: Projects,
  contact: Contact,
}

function App() {
  const [activePage, setActivePage] = useState('home')
  const ActiveComponent = pages[activePage]

  const navItems = [
    {
      label: 'Home',
      onClick: () => setActivePage('home'),
    },
    {
      label: 'Projects',
      onClick: () => setActivePage('projects'),
    },
    {
      label: 'Contact',
      onClick: () => setActivePage('contact'),
    },
  ]

  return (
    <>
      {/* Splash cursor effect */}
      <SplashCursor />

      {/* Pixel snow background */}
      <PixelSnow
        color="#c084fc"
        speed={1.0}
        density={0.25}
        variant="snowflake"
        brightness={1.2}
        pixelResolution={180}
      />

      {/* App shell */}
      <div className="relative z-10 min-h-screen">
        {/* Gooey nav bar */}
        <header className="sticky top-0 z-30 flex items-center justify-center border-b border-white/5 bg-[#06050e] py-4">
          <GooeyNav
            items={navItems}
            animationTime={600}
            particleCount={15}
            initialActiveIndex={0}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </header>

        <ActiveComponent />

        <footer className="border-t border-white/5 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Samia Katingiri &middot; Built with React + React Bits
        </footer>
      </div>
    </>
  )
}

export default App
