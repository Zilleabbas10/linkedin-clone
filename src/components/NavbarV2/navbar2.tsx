import { useState } from "react"
import { useLocation } from "react-router-dom"
import { NAV_ITEMS, PROFILE_IMG, LINKEDIN_LOGO_URL } from '../../constants/appConstants'

const Navbar2 = () => {
  const [isDropdownOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (path: string) => pathname === path

  const navItemBase = 'flex flex-col items-center cursor-pointer'
  const activeSpan = 'text-sm border-b-3 border-gray-600 text-black'
  const inactiveSpan = 'text-sm text-gray-500'

  return (
    <nav className='bg-white h-13 flex justify-between py-1 px-5 xl:px-50 fixed top-0 w-full z-1000'>
      <div className="flex gap-2 items-center hover:opacity-90 transition-opacity">
        <img
          src={LINKEDIN_LOGO_URL}
          alt="LinkedInLogo"
          className="size-7"
        />
        <div className="relative">
          <input
            className="w-70 bg-gray-100 rounded-sm h-10 px-4 border-2 border-transparent transition-[width] duration-500 focus:w-[350px] focus:outline-none focus:border-blue-600"
            placeholder="Search"
          />
          {isDropdownOpen && (
            <div className="absolute w-88 left-0 bg-gray-200">
              <div className="flex gap-2 mb-1 items-center p-2 cursor-pointer">
                <img src={PROFILE_IMG} alt="" className="rounded-full size-7" />
                <span>Zill E Abbas</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden gap-10 md:flex">
        {NAV_ITEMS.map(({ path, Icon, label, badge, isProfile }) => {
          const active = isActive(path)
          const iconColor = active ? 'black' : 'gray'
          return (
            <div key={path} className={navItemBase}>
              {isProfile ? (
                <img alt="profile" src={PROFILE_IMG} className="rounded-full size-7" />
              ) : Icon ? (
                <div className="relative">
                  <Icon sx={{ color: iconColor }} />
                  {badge != null && (
                    <span className="p-1 rounded-full text-xs bg-red-700 text-white min-w-4 text-center">
                      {badge}
                    </span>
                  )}
                </div>
              ) : null}
              <span className={active ? activeSpan : inactiveSpan}>{label}</span>
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar2