import { Link } from 'react-router-dom'
import {
  linkClassNameBold,
  inputClassName,
  labelClassName,
  btnPrimary,
  dividerClassName,
} from '../../constants/classes'
import GoogleLoginButton from '../../components/GoogleLoginButton/googleLoginButton'

function LoginPage() {
  return (
    <div className="w-full flex flex-col items-center py-8 md:py-12 px-5">
      <div className="w-full max-w-md shadow-lg rounded-xl bg-white p-8 md:p-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Sign in
        </h1>
        <div className="rounded-full border border-gray-300 py-6 px-4 text-center text-gray-500 text-sm cursor-pointer hover:bg-gray-50 transition-colors mb-4">
          <GoogleLoginButton />
        </div>
        <div className="flex items-center gap-3 my-6">
          <div className={dividerClassName} />
          <span className="text-sm text-gray-500 font-medium">or</span>
          <div className={dividerClassName} />
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="login-email" className={labelClassName}>
              Email
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="login-password" className={labelClassName}>
              Password
            </label>
            <input
              id="login-password"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              className={inputClassName}
            />
          </div>
          <button type="submit" className={`${btnPrimary} mt-1`}>
            Sign in
          </button>
        </form>
      </div>

      <p className="mt-6 text-base text-gray-700">
        New to LinkedIn?{' '}
        <Link to="/signup" className={linkClassNameBold}>
          Join now
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
