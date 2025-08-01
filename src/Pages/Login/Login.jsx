import React from 'react'

const Login = () => {
  return (
    <div className='Login_Container'>
      <form id='Login_Form' action="/login" method='post'> 
        <label htmlFor='email'>Email</label>
        <input type="text" id='email' placeholder='Email' autoComplete='off' />
        <label htmlFor='password'>Password</label>
        <input type="password" id='password' placeholder='Password' autoComplete='off' />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login