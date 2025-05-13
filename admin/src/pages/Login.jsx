import React, { useState } from 'react';

function Login() {
  const [state, setState] = useState('Admin');

  return (
    <form className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm flex flex-col gap-4">
        <p className="text-2xl font-semibold text-center">
          <span className="text-blue-600">{state}</span> Login
        </p>

        <div>
          <p className="text-sm font-medium mb-1">Email</p>
          <input
            type="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <p className="text-sm font-medium mb-1">Password</p>
          <input
            type="password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>

        <div className="text-center text-sm mt-2">
          {state === 'Admin' ? (
            <p>
              Doctor Login?{' '}
              <span
                onClick={() => setState('Doctor')}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Admin Login?{' '}
              <span
                onClick={() => setState('Admin')}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  );
}

export default Login;
