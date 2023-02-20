import React from 'react'

export default function Login() {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/',{
      replace: true
  })
  }
  return (
    <div className='container mt-5'><h1>
      Login</h1>
      
      <button className='btn btn-primary' onClick={onLogin}> 

      </button>
      
      </div>
  )
}
