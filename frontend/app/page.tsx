// app/page.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AuthPage = () => {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Update the endpoint to match your backend routes
    const endpoint = isSignup ? '/api/auth/signup' : '/api/auth/signin'; 
    const response = await fetch(`http://localhost:5000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Redirect to the newsfeed page after successful authentication
      router.push('/newsfeed');
    } else {const data = await response.json();
    setError(data.message || 'Authentication failed');}
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-black font-semibold mb-6">{isSignup ? 'Sign Up' : 'Sign In'}</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block mb-1 text-gray-600">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}
                className="w-full p-2 border rounded text-black"
                required
              />
            </div>
          )}
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
              className="w-full p-2 border rounded text-black"
              required
            />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">
            {isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        {error && (
          <p className="mt-4 text-red-500">{error}</p>
        )}
        <p className="mt-4 text-gray-600">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={() => setIsSignup(!isSignup)} className="text-blue-600 underline">
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
