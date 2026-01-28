import { GoogleLogin } from '@react-oauth/google'
import type { CredentialResponse, GoogleLoginProps } from '@react-oauth/google'

/** Google "G" logo - official multicolor icon used in Sign in with Google */
const GoogleLogo = () => (
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt=""
    width={18}
    height={18}
    className="shrink-0"
  />
)

/** Props derived from @react-oauth/google GoogleLoginProps, with optional onSuccess and our wrapper className */
type GoogleLoginButtonProps = Omit<GoogleLoginProps, 'onSuccess'> & {
  onSuccess?: (response: CredentialResponse) => void
  className?: string
}

const GoogleLoginButton = ({
  onSuccess,
  onError = () => console.log('Login failed'),
  className = '',
  width = '100%',
  containerProps,
  ...googleLoginProps
}: GoogleLoginButtonProps) => {
  const handleSuccess = (response: CredentialResponse) => {
    console.log(response)
    onSuccess?.(response)
  }

  return (
    <div className={`relative ${className}`}>
      {/* Visible overlay: no inner border/background, matches parent container look */}
      <div
        className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none text-gray-800 font-medium"
        aria-hidden
      >
        <GoogleLogo />
        <span>Continue with Google</span>
      </div>
      {/* Google iframe: invisible but on top so clicks open Google sign-in */}
      <div className="absolute inset-0 z-10 opacity-0 w-full h-full min-h-5 [&>div]:min-h-full! [&>div]:h-full!">
        <GoogleLogin
          {...googleLoginProps}
          onSuccess={handleSuccess}
          onError={onError}
          width={width}
          containerProps={{
            ...containerProps,
            style: {
              minHeight: '100%',
              height: '100%',
              background: 'transparent',
              border: 'none',
              ...containerProps?.style,
            },
          }}
        />
      </div>
    </div>
  )
}

export default GoogleLoginButton