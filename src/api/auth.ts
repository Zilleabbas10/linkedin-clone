/**
 * Auth API – plain request functions (no React, no TanStack Query).
 * Use these inside queryFn/mutationFn in hooks/queries/authQueries.ts
 */

import { apiRequest } from './client'

export type LoginBody = { email: string; password: string }

export type AuthUser = Record<string, unknown> // refine when you have a user type

export async function login(body: LoginBody): Promise<AuthUser> {
  return apiRequest<AuthUser>('/api/v1/users/auth/login', {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

/** Call this when you have a "current user" or "me" endpoint. */
export async function getMe(): Promise<AuthUser | null> {
  try {
    return await apiRequest<AuthUser>('/api/v1/users/me')
  } catch {
    return null
  }
}
