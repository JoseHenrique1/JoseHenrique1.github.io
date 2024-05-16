import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './globals.css'
import { Header } from './components/Header/index.tsx'
import { Footer } from './components/Footer/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='flex flex-col w-full min-h-screen bg-[#101731]'>
    <Header/>
    <App />
    <Footer/>
  </div>,
)
