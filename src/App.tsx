import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/footer'
import Navbar1 from './components/NavbarV1/navbar1'
import Navbar2 from './components/NavbarV2/navbar2'
import LandingPage from './pages/Landing/landing'
import SignupPage from './pages/SignUp/signup'
import LoginPage from './pages/Login/login'
import FeedsPage from './pages/Feeds/feeds'
import MyNetworkPage from './pages/MyNetwork/myNetwork'
import ResumePage from './pages/Resume/resume'
import MessagesPage from './pages/Messages/messages'
import ProfilePage from './pages/Profile/profile'
import ActivitiesPage from './pages/Activities/activities'
import PostDetailsPage from './pages/PostDetails/postDetails'
import NotificationsPage from './pages/Notifications/notifications'
import { useAuthStatus } from './hooks/queries/authQueries'
import './App.css'

const App = () => {
  const { data: authData, isLoading } = useAuthStatus()
  const isLoggedIn = !!authData

  return (
    <div className="bg-gray-100 min-h-screen w-full box-border flex flex-col">
      {isLoading ? <Navbar1 /> : isLoggedIn ? <Navbar2 /> : <Navbar1 />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/feeds" element={<FeedsPage />} />
          <Route path="/my_network" element={<MyNetworkPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile/:id/activities/:postId" element={<PostDetailsPage />} />
          <Route path="/profile/:id/activities" element={<ActivitiesPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
