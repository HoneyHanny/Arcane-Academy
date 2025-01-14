import '@/styles/globals.css'
import Home from './pages/Home'
import { ThemeProvider } from './components/theme-provider'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Alphabet from './pages/Alphabet'
import Numbers from './pages/Numbers'
import Colors from './pages/Colors'
import Animals from './pages/Animals'
import ColorClicker from './pages/ColorClicker'

// To run, run `npm run dev -- --host` command in the terminal
const App = () => {
  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/alphabet' element={<Alphabet />} />
          <Route path='/numbers' element={<Numbers />} />
          <Route path='/colors' element={<Colors />} />
          <Route path='/animals' element={<Animals />} />
          <Route path='/color-clicker' element={<ColorClicker />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
