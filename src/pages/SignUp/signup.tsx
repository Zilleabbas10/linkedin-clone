import { Link } from 'react-router-dom'
import {
  linkClassNameBold,
  inputClassName,
  labelClassName,
  btnPrimary,
  dividerClassName,
} from '../../constants/classes'

function SignupPage() {
  return (
    <div className="w-full flex flex-col items-center py-8 md:py-12 px-5">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center max-w-md">
        Make the most of your professional life
      </h1>

      <div className="w-full max-w-md shadow-lg rounded-xl bg-white p-8 md:p-10">
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="signup-email" className={labelClassName}>
              Email
            </label>
            <input
              id="signup-email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="signup-password" className={labelClassName}>
              Password
            </label>
            <input
              id="signup-password"
              type="password"
              placeholder="Password (6+ characters)"
              autoComplete="new-password"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="signup-name" className={labelClassName}>
              Full name
            </label>
            <input
              id="signup-name"
              type="text"
              placeholder="Full name"
              autoComplete="name"
              className={inputClassName}
            />
          </div>
          <button type="submit" className={`${btnPrimary} mt-1`}>
            Agree &amp; Join
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className={dividerClassName} />
          <span className="text-sm text-gray-500 font-medium">or</span>
          <div className={dividerClassName} />
        </div>

        <div className="rounded-full border border-gray-300 py-2.5 px-4 text-center text-gray-500 text-sm cursor-pointer hover:bg-gray-50 transition-colors">
          Continue with Google
        </div>
      </div>

      <p className="mt-6 text-base text-gray-700">
        Already on LinkedIn?{' '}
        <Link to="/login" className={linkClassNameBold}>
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default SignupPage
