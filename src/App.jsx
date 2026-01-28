import './App.css'
import Footer from './components/Footer/footer'
import Navbar1 from './components/NavbarV1/navbar1'
import LandingPage from './pages/LandingPage/landingPage'
import SignupPage from './pages/SignUp/signup'
import LoginPage from './pages/Login/login'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="bg-gray-100 w-full h-full box-border">
      <Navbar1 />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
