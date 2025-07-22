// src/pages/RegisterPage.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../services/authService';
import type { IRegisterPayload } from '../types';

const googleIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<IRegisterPayload>({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = await registerUser(formData);
      console.log('Registrasi berhasil:', data);
      alert('Registrasi berhasil! Anda akan diarahkan ke halaman login.');
      navigate('/login');
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Terjadi kesalahan saat registrasi.';
      setError(errorMessage);
      console.error('Error registrasi:', err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background">
      <div className="flex items-center min-h-screen justify-center ">
        <div className="w-full flex md:flex-nowrap flex-wrap-reverse max-w-5xl md:gap-0 gap-10 p-8 bg-card rounded-lg mb-[50px]">
          <div className="md:w-1/2 w-full flex items-center">
            <img src="/images/ilustration.png" className="w-full h-auto object-cover" alt="" />
          </div>

          <div className="md:px-14 px-0 md:w-1/2 w-full">
            <h1 className="text-2xl font-bold text-center text-text-dark mb-6">Create Account</h1>

            {/* Google Sign Up */}
            <a href={`${BACKEND_URL}/api/auth/google`} className="w-full flex items-center justify-center border border-gray-900 rounded-lg hover:bg-black hover:text-white transition-all">
              <img src={googleIcon} className="w-7 h-7 mr-2" alt="" />
              <span className="font-semibold py-2.5 text-base text-text-dark">Sign Up With Google</span>
            </a>

            {/* Divider */}
            <div className="flex items-center justify-center my-6">
              <hr className="flex-grow border-t border-gray-500" />
              <span className="mx-3 text-sm text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-500" />
            </div>

            {/* Form Register */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username */}
              <div>
                <label htmlFor="username" className="text-sm font-semibold text-gray-600 block">
                  Username
                </label>
                <input type="text" name="username" id="username" required onChange={handleChange} className="w-full p-2 mt-1 text-gray-900 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-gray-600 block">
                  Email
                </label>
                <input type="email" name="email" id="email" required onChange={handleChange} className="w-full p-2 mt-1 text-gray-900 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="text-sm font-semibold text-gray-600 block">
                  Password
                </label>
                <input type="password" name="password" id="password" required onChange={handleChange} className="w-full p-2 mt-1 text-gray-900 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <p className="text-center text-gray-600 text-sm">
                Have an account?{' '}
                <Link to="/login" className="font-medium text-primary hover:underline">
                  Login here
                </Link>
              </p>

              {error && <p className="text-red-500 text-sm text-center">{error}</p>}

              <div>
                <button type="submit" disabled={loading} className="cursor-pointer w-full py-3 font-bold text-white bg-primary rounded hover:bg-primary-dark disabled:bg-opacity-50 transition-all">
                  {loading ? 'Registering...' : 'Register'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
