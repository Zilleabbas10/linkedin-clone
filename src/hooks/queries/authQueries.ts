/**
 * Auth-related TanStack Query hooks.
 * Queries: useAuthStatus
 * Mutations: useLoginMutation (invalidate auth so navbar updates)
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { authKeys } from '../../constants/queryKeys'
import * as authApi from '../../api/auth'

/** Check if user is logged in. Uses login with placeholder creds for now; switch to getMe() when you have a session endpoint. */
export function useAuthStatus() {
  return useQuery({
    queryKey: authKeys.status,
    queryFn: () => authApi.login({ email: 'abc@gmail.com', password: '123456' }),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export function useLoginMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (body: authApi.LoginBody) => authApi.login(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.all })
    },
  })
}
