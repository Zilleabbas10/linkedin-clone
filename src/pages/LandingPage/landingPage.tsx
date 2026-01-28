import { Link } from 'react-router-dom'
import { linkClassName, linkClassNameBold } from '../../constants/classes'
import GoogleLoginButton from '../../components/GoogleLoginButton/googleLoginButton'

const btnBase =
  'flex items-center justify-center w-full md:w-[70%] mx-auto rounded-full py-3 px-4 font-medium transition-all duration-200 cursor-pointer'

function LandingPage() {
  return (
    <div className="my-4 py-8 md:py-14 md:pl-16 lg:pl-24 px-5 md:flex md:justify-between md:items-center md:gap-12 max-w-6xl mx-auto">
      <div className="md:max-w-md md:flex-1 space-y-5">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight tracking-tight">
          Welcome to your professional community
        </h1>

        <div className="space-y-3 pt-1">
          <div
            className={`${btnBase} min-h-12 bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-sm`}
          >
            <GoogleLoginButton className="w-full" />
          </div>
          <Link
            to="/login"
            className={`${btnBase} bg-white text-gray-800 border-2 border-gray-800 hover:bg-gray-100 block text-center no-underline`}
          >
            Sign in with email
          </Link>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed pt-1">
          By clicking Continue to join or sign in, you agree to{' '}
          <Link to="#" className={linkClassName}>
            LinkedIn&apos;s User Agreement
          </Link>
          ,{' '}
          <Link to="#" className={linkClassName}>
            Privacy Policy
          </Link>
          , and{' '}
          <Link to="#" className={linkClassName}>
            Cookie Policy
          </Link>
          .
        </p>

        <p className="text-base pt-2">
          New to LinkedIn?{' '}
          <Link to="/signup" className={linkClassNameBold}>
            Join now
          </Link>
        </p>
      </div>

      <div className="hidden md:block md:flex-1 md:max-w-[55%] mt-8 md:mt-0">
        <img
          src="https://static-cse.canva.com/blob/717527/headerlinkedin2.png"
          alt="People connecting professionally on LinkedIn"
          className="w-full h-auto object-contain drop-shadow-sm"
        />
      </div>
    </div >
  )
}

export default LandingPage
