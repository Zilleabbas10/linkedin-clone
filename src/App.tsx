import './App.css'
import Footer from './components/Footer/footer'
import Navbar1 from './components/NavbarV1/navbar1'
import LandingPage from './pages/LandingPage/landingPage'
import SignupPage from './pages/SignUp/signup'
import LoginPage from './pages/Login/login'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen w-full box-border flex flex-col">
      <Navbar1 />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
