/**
 * TanStack Query keys – one place for all keys.
 * Use with queryClient.invalidateQueries({ queryKey: authKeys.all }) after mutations.
 */

export const authKeys = {
  all: ['auth'] as const,
  status: ['auth', 'status'] as const,
}

/** @deprecated Use authKeys.status */
export const AUTH_QUERY_KEY = authKeys.status
