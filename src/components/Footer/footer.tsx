import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 mt-auto border-t border-gray-300">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center py-6 px-5 md:px-8">
        <Link
          to="/"
          className="flex gap-1.5 items-center cursor-pointer no-underline hover:opacity-90 transition-opacity mb-2"
        >
          <span className="text-blue-800 font-bold text-lg">Linked</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            className="size-5"
          />
        </Link>
        <p className="text-sm text-gray-600">© 2025</p>
      </div>
    </footer>
  )
}

export default Footer
