/**
 * App-wide constants: URLs, nav config, routes, and other shared values.
 * Use classes.ts for shared CSS/Tailwind class names.
 */

import type { ComponentType } from 'react'
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined'

// ─── URLs / Assets ─────────────────────────────────────────────────────────

export const LINKEDIN_LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'

export const PROFILE_IMG =
  'https://lh3.googleusercontent.com/-Ttj7sBxcNyA/AAAAAAAAAAI/AAAAAAAAAAA/ALKGfklOnrO5CJoCoDbNqLE6sPYk2urbQg/photo.jpg?sz=46'

export const PROFILE_COVER_IMG = 'https://www.shutterstock.com/shutterstock/photos/1202031361/display_1500/stock-photo-sunset-in-florence-header-picture-1202031361.jpg'

// ─── Routes ─────────────────────────────────────────────────────────────────

export const ROUTES = {
  FEEDS: '/feeds',
  MY_NETWORK: '/my_network',
  RESUME: '/resume',
  MESSAGES: '/messages',
  NOTIFICATIONS: '/notifications',
  PROFILE: '/profile',
  LOGIN: '/login',
  SIGNUP: '/signup',
  LANDING: '/',
} as const

// ─── Nav (navbar items) ────────────────────────────────────────────────────

export type NavItem = {
  path: string
  label: string
  Icon?: ComponentType<{ sx?: { color: string } }> | null
  badge?: number
  isProfile?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { path: ROUTES.FEEDS, Icon: HomeOutlinedIcon, label: 'Home' },
  { path: ROUTES.MY_NETWORK, Icon: GroupAddOutlinedIcon, label: 'My Network' },
  { path: ROUTES.RESUME, Icon: WorkOutlineIcon, label: 'Resume' },
  { path: ROUTES.MESSAGES, Icon: MessageOutlinedIcon, label: 'Messages' },
  {
    path: ROUTES.NOTIFICATIONS,
    Icon: AddAlertOutlinedIcon,
    label: 'Notifications',
    badge: 1,
  },
  { path: ROUTES.PROFILE, label: 'Profile', isProfile: true },
]

export const DUMMY_TEXT = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'
