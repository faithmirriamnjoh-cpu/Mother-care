import { useState } from 'react'
import './App.css'

function Brand() {
  return (
    <a className="brand" href="/login" aria-label="MotherCare home">
      <svg className="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 41.5C19.2 37.5 7.5 29.2 7.5 18.4c0-6.2 4.1-10.4 9.5-10.4 3.2 0 5.7 1.7 7 4.5 1.3-2.8 3.8-4.5 7-4.5 5.4 0 9.5 4.2 9.5 10.4 0 10.8-11.7 19.1-16.5 23.1Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path d="M24 13c-4.3 4.8-4.2 11.6.1 16.4 3.3-3.1 5.6-6.2 6.2-9.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <span className="brand-copy">
        <strong>MotherCare</strong>
        <small>Healthy mothers · Healthy babies · Brighter futures</small>
      </span>
    </a>
  )
}

function StoryPanel({ isSignup }) {
  return (
    <aside className="story-panel">
      <div className="story-orb story-orb-one" />
      <div className="story-orb story-orb-two" />
      <div className="story-topline">
        <span className="story-kicker">CARE FOR EVERY CHAPTER</span>
        <span className="story-sparkle" aria-hidden="true">✳</span>
      </div>
      <div className="mother-illustration" aria-hidden="true">
        <svg viewBox="0 0 420 340" fill="none">
          <ellipse cx="211" cy="292" rx="150" ry="20" fill="#9CB8A7" fillOpacity=".42" />
          <circle cx="211" cy="165" r="128" fill="#F0E7D7" fillOpacity=".16" />
          <path d="M145 104c-5-42 17-70 51-70 32 0 49 24 48 53-1 16-10 30-22 39l-57 5c-10-7-17-16-20-27Z" fill="#332820" />
          <path d="M173 115c4 15 13 24 27 24s23-9 27-24l8 3c-3 27-17 42-35 42s-32-15-35-42l8-3Z" fill="#BD8065" />
          <path d="M172 91c9-8 22-10 34-7 12 3 21 9 29 20-3-31-18-49-43-49-23 0-38 17-39 42 5-3 12-5 19-6Z" fill="#332820" />
          <path d="M148 167c10-20 27-30 52-30 37 0 62 17 76 51l20 96H114l8-75c3-17 11-31 26-42Z" fill="#D6B6A1" />
          <path d="M153 171c-19 20-29 45-31 77l-8 36h76l20-61-57-52Z" fill="#F7F1E8" />
          <path d="M259 177c24 20 34 52 38 107h-83l-12-55 57-52Z" fill="#F7F1E8" />
          <path d="M214 207c17-17 40-17 55 0 15 17 12 44-5 58-15 13-38 13-52 0-17-15-17-41 2-58Z" fill="#C98D72" />
          <path d="M205 222c10-14 29-19 44-9 12 8 18 21 17 34-9 12-20 19-33 20-18-1-31-11-36-26 0-7 2-13 8-19Z" fill="#F2D1AE" />
          <path d="M206 236c8 2 14 7 18 14m28-16c-6 2-10 6-13 12" stroke="#9B664F" strokeWidth="2" strokeLinecap="round" />
          <path d="M96 241c-14-32-14-67-2-98m6 55c-16-7-25-18-29-33m35 11c14-12 21-26 21-44" stroke="#B6D0BA" strokeWidth="3" strokeLinecap="round" />
          <path d="M81 168c-15-1-24-9-27-23 14 0 24 8 27 23Zm24-4c1-15 9-24 23-28 0 14-8 24-23 28Zm-10 32c-14-4-21-14-21-29 13 4 21 14 21 29Z" fill="#B6D0BA" />
          <path d="M325 242c13-31 14-64 4-94m-7 50c15-7 24-18 28-33m-37 10c-13-11-20-25-20-42" stroke="#B6D0BA" strokeWidth="3" strokeLinecap="round" />
          <path d="M341 165c15-1 24-9 27-23-14 0-24 8-27 23Zm-23-4c-1-15-9-24-23-28 0 14 8 24 23 28Zm10 32c14-4 21-14 21-29-13 4-21 14-21 29Z" fill="#B6D0BA" />
        </svg>
        <span className="illustration-note">A little care goes a long way</span>
      </div>
      <div className="story-copy">
        <p className="story-eyebrow">{isSignup ? 'A HEALTHIER START' : 'HERE FOR YOUR JOURNEY'}</p>
        <h1>{isSignup ? 'Care that grows with your little one.' : 'Your health journey matters.'}</h1>
        <p>
          {isSignup
            ? 'Create your account for thoughtful reminders, trusted guidance, and support for every new milestone.'
            : 'A calmer place to keep track of your pregnancy, your baby’s care, and all the moments in between.'}
        </p>
      </div>
      <div className="story-footer">
        <span className="footer-heart" aria-hidden="true">♡</span>
        <span>Here for you, every step of the way</span>
      </div>
    </aside>
  )
}

function EyeIcon({ visible }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.7" stroke="currentColor" strokeWidth="1.8" />
      {!visible && <path d="m4 4 16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />}
    </svg>
  )
}

function Field({ label, type = 'text', placeholder, name, optional = false, autoComplete, showToggle = false, value, onChange }) {
  const [visible, setVisible] = useState(false)
  const inputType = showToggle ? (visible ? 'text' : 'password') : type

  return (
    <label className="field">
      <span className="field-label">
        <span>{label}</span>
        {optional && <span className="optional">optional</span>}
      </span>
      <span className="input-wrap">
        <input
          autoComplete={autoComplete}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={!optional}
          type={inputType}
          value={value}
        />
        {showToggle && (
          <button
            aria-label={visible ? 'Hide password' : 'Show password'}
            className="password-toggle"
            onClick={() => setVisible((current) => !current)}
            type="button"
          >
            <EyeIcon visible={visible} />
          </button>
        )}
      </span>
    </label>
  )
}

function LoginForm() {
  const [message, setMessage] = useState('')

  function submitForm(event) {
    event.preventDefault()
    setMessage('This demo is ready for an account service to be connected.')
  }

  return (
    <>
      <p className="form-eyebrow">WELCOME BACK</p>
      <h2 className="form-title">Good to see you again.</h2>
      <p className="form-intro">Log in to pick up right where you left off.</p>
      <form className="auth-form login-form" onSubmit={submitForm}>
        <Field
          autoComplete="tel"
          label="Phone number"
          name="phone"
          placeholder="e.g. +237 6XX XXX XXX"
          type="tel"
        />
        <Field
          autoComplete="current-password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          showToggle
        />
        <div className="form-options">
          <label className="check-label">
            <input name="remember" type="checkbox" />
            <span>Remember me</span>
          </label>
          <button className="text-button" onClick={() => setMessage('Password reset will be available when account services are connected.')} type="button">
            Forgot password?
          </button>
        </div>
        <button className="primary-button" type="submit">
          Log In <span aria-hidden="true">→</span>
        </button>
        <div className="divider"><span>or continue with</span></div>
        <button className="google-button" onClick={() => setMessage('Google sign-in is not connected in this demo.')} type="button">
          <span className="google-g" aria-hidden="true">G</span>
          Continue with Google
        </button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
      <p className="switch-prompt">
        Don’t have an account? <a href="/signup">Sign up</a>
      </p>
    </>
  )
}

function SignupForm() {
  const [message, setMessage] = useState('')

  function submitForm(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    if (formData.get('password') !== formData.get('confirmPassword')) {
      setMessage('Your passwords don’t match. Please check and try again.')
      return
    }
    setMessage('This demo is ready for an account service to be connected.')
  }

  return (
    <>
      <p className="form-eyebrow">A LOVELY PLACE TO BEGIN</p>
      <h2 className="form-title">Create your account</h2>
      <p className="form-intro">It only takes a few minutes to get started.</p>
      <form className="auth-form signup-form" onSubmit={submitForm}>
        <Field autoComplete="name" label="Full name" name="fullName" placeholder="Enter your full name" />
        <Field autoComplete="tel" label="Phone number" name="phone" placeholder="e.g. +237 6XX XXX XXX" type="tel" />
        <Field autoComplete="email" label="Email address" name="email" optional placeholder="Enter your email" type="email" />
        <Field autoComplete="new-password" label="Password" name="password" placeholder="Create a password" showToggle />
        <Field autoComplete="new-password" label="Confirm password" name="confirmPassword" placeholder="Re-enter your password" showToggle />
        <label className="field">
          <span className="field-label">I am a</span>
          <span className="select-wrap">
            <select defaultValue="" name="role" required>
              <option disabled value="">Select your role</option>
              <option value="expecting">Expecting parent</option>
              <option value="parent">Parent or caregiver</option>
              <option value="healthcare">Healthcare professional</option>
            </select>
          </span>
        </label>
        <label className="check-label terms-check">
          <input name="terms" required type="checkbox" />
          <span>I agree to the <a href="#terms" onClick={(event) => { event.preventDefault(); setMessage('Terms of Service and Privacy Policy will be available soon.') }}>Terms of Service</a> and <a href="#privacy" onClick={(event) => { event.preventDefault(); setMessage('Terms of Service and Privacy Policy will be available soon.') }}>Privacy Policy</a>.</span>
        </label>
        <button className="primary-button" type="submit">
          Create account <span aria-hidden="true">→</span>
        </button>
        {message && <p className="form-message" role="status">{message}</p>}
      </form>
      <p className="switch-prompt">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </>
  )
}

function App() {
  const isSignup = window.location.pathname.replace(/\/+$/, '') === '/signup'

  return (
    <main className="auth-page">
      <div className={`auth-shell${isSignup ? ' signup-shell' : ''}`}>
        <StoryPanel isSignup={isSignup} />
        <section className="auth-panel" aria-label={isSignup ? 'Create an account' : 'Log in'}>
          <div className="form-container">
            <Brand />
            <div className="form-content">
              {isSignup ? <SignupForm /> : <LoginForm />}
            </div>
            <p className="privacy-note">
              <span aria-hidden="true">♡</span> Your information is private and secure
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
