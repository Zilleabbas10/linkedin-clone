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

// ─── Routes ─────────────────────────────────────────────────────────────────

export const ROUTES = {
  FEEDS: '/feeds',
  MY_NETWORK: '/mynetwork',
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
