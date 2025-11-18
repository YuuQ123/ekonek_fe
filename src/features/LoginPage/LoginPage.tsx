import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { username, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-3xl shadow-2xl p-8 text-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">eKonek</h1>
            <h2 className="text-xl font-semibold mb-2">Selamat Datang</h2>
            <p className="text-sm opacity-90">Masuk ke akun Anda untuk melanjutkan</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                placeholder="Masukkan username"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                placeholder="Masukkan password"
                required
              />
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-orange-600 bg-white border-gray-300 rounded focus:ring-orange-500 focus:ring-2 mr-2"
                />
                <span>Ingat Saya</span>
              </label>
              <a
                href="/forgot-password"
                className="text-white hover:text-orange-200 underline transition-colors duration-200"
              >
                Lupa password
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Masuk
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-orange-300 opacity-50"></div>
            <span className="px-4 text-sm opacity-75">atau</span>
            <div className="flex-1 border-t border-orange-300 opacity-50"></div>
          </div>

          {/* Register Link */}
          <div className="text-center">
            <p className="text-sm mb-4">
              Belum punya akun?{' '}
              <a 
                href="/register"
                className="text-white hover:text-orange-200 underline font-medium transition-colors duration-200"
              >
                Daftar sekarang
              </a>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6 pt-4 border-t border-orange-300 border-opacity-30">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="text-sm text-white hover:text-orange-200 underline transition-colors duration-200 flex items-center justify-center mx-auto"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;