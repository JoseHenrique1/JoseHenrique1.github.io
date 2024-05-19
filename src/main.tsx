import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home.tsx'
import { About } from './pages/About.tsx'
import './globals.css'
import { Header } from './components/Header/index.tsx'
import { Footer } from './components/Footer/index.tsx'
import { Project } from './pages/Project.tsx'
import { Service } from './pages/Service.tsx'
import { Experience } from './pages/Experience.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='flex flex-col w-full min-h-screen bg-[#101731]'>
    <Header/>
    <main className='flex flex-col flex-grow w-full mx-auto my-0 max-w-screen-xl  p-2'>
      <Home />
      <About/>
      <Project/>
      <Service/>
      <Experience/>
    </main>
    <Footer/>
  </div>,
)
