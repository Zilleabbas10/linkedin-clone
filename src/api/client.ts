/**
 * API base URL and shared fetch helpers.
 * Use functions in api/* for actual requests; use hooks in hooks/queries for useQuery/useMutation.
 */

export const getBaseUrl = () =>
  import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export async function apiRequest<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const base = getBaseUrl()
  const url = path.startsWith('http') ? path : `${base}${path}`
  const res = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  if (!res.ok) throw new Error(String(res.status))
  const text = await res.text()
  return (text ? JSON.parse(text) : null) as T
}
