import React, { useState } from 'react'





function Login() {

    const [state,setState] = useState('Admin')

   

    

  return (
    <form>

      <div>
        <p><span>{state}</span> Login</p>

         <div>
            <p>Email</p>
            <input type="email" required />
        </div>
        
        <div>
            <p>Password</p>
            <input type="password" required />
        </div>
        <button>Login</button>
      </div>

    </form>
  )
}

export default Login