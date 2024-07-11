import ReactDOM from 'react-dom/client'
import './globals.css'

import { Home } from './pages/Home.tsx'
import { About } from './pages/About.tsx'
import { Header } from './components/Header/index.tsx'
import { Footer } from './components/Footer/index.tsx'
import { Project } from './pages/Project.tsx'
import { Service } from './pages/Service.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='flex flex-col w-full min-h-screen bg-[#101731]'>
    <Header/>
    <main className='flex gap-8 flex-col flex-grow w-full mx-auto my-0 max-w-screen-xl  p-4'>
      <Home />
      <About/>
      <Project/>
      <Service/>
    </main>
    <Footer/>
  </div>,
)
