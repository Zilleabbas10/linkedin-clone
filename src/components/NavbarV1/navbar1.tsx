import { Link } from 'react-router-dom'

const navLinkBase =
  'rounded-full px-4 py-2 text-base md:text-lg font-medium transition-colors duration-200 cursor-pointer'

const navLinkPrimary = `${navLinkBase} text-gray-800 hover:bg-gray-200`

const navLinkOutline = `${navLinkBase} text-blue-800 border-2 border-blue-800 hover:bg-blue-50`

const Navbar1 = () => {
  return (
    <nav className="w-full fixed bg-gray-100 md:px-16 px-5 flex justify-between items-center py-4 box-border border-b border-gray-200">
      <Link
        to="/"
        className="flex gap-1.5 items-center cursor-pointer no-underline hover:opacity-90 transition-opacity"
      >
        <span className="text-2xl md:text-3xl font-bold text-blue-800">
          Linked
        </span>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn"
          className="w-6 h-6"
        />
      </Link>
      <div className="flex gap-2 md:gap-4 items-center">
        <Link to="/signup" className={navLinkPrimary}>
          Join now
        </Link>
        <Link to="/login" className={navLinkOutline}>
          Sign in
        </Link>
      </div>
    </nav>
  )
}

export default Navbar1
