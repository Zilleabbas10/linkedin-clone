import './App.css'
import Footer from './components/Footer/footer'
import Navbar1 from './components/NavbarV1/navbar1'
import Navbar2 from './components/NavbarV2/navbar2'
import LandingPage from './pages/Landing/landing'
import SignupPage from './pages/SignUp/signup'
import LoginPage from './pages/Login/login'
import { Routes, Route } from 'react-router-dom'
import FeedsPage from './pages/Feeds/feeds'

const App = () => {
  const isLoggedIn = true
  return (
    <div className="bg-gray-100 min-h-screen w-full box-border flex flex-col">
      {isLoggedIn ? <Navbar2 /> : <Navbar1 />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/feeds" element={<FeedsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
