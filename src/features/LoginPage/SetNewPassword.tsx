import React, { useState } from 'react';

const SetNewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (newPassword !== confirmPassword) {
      setError('Password tidak cocok!');
      return;
    }
    
    if (newPassword.length < 8) {
      setError('Password minimal 8 karakter!');
      return;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
      setError('Password harus mengandung huruf besar, huruf kecil, dan angka!');
      return;
    }
    
    // Handle set new password logic here
    console.log('New password:', newPassword);
    setIsSubmitted(true);
  };

  const handleBackToLogin = () => {
    window.location.href = '/login';
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Success Card */}
          <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-3xl shadow-2xl p-8 text-white">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">eKonek</h1>
              <h2 className="text-xl font-semibold mb-2">Password Berhasil Dibuat</h2>
              <p className="text-sm opacity-90">
                Password baru Anda telah berhasil disimpan
              </p>
            </div>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center mb-8">
              <p className="text-sm opacity-90 leading-relaxed">
                Sekarang Anda dapat login menggunakan password baru yang telah dibuat.
              </p>
            </div>

            {/* Back to Login Button */}
            <button
              onClick={handleBackToLogin}
              className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Masuk ke Akun
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Set New Password Card */}
        <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-3xl shadow-2xl p-8 text-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">eKonek</h1>
            <h2 className="text-xl font-semibold mb-2">Atur Password Baru</h2>
            <p className="text-sm opacity-90">
              Buat password yang kuat untuk keamanan akun Anda
            </p>
          </div>

          {/* Set New Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Password Baru"
                className="w-full px-4 py-3 pr-12 bg-white text-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 text-sm"
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Konfirmasi Password Baru"
                className="w-full px-4 py-3 pr-12 bg-white text-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 text-sm"
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {showConfirmPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Password Requirements */}
            <div className="bg-white/10 rounded-xl p-4">
              <p className="text-xs opacity-90 mb-2 font-medium">Syarat Password:</p>
              <ul className="text-xs opacity-80 space-y-1">
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  Minimal 8 karakter
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  Mengandung huruf besar dan kecil
                </li>
                <li className="flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                  Mengandung angka
                </li>
              </ul>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-200 text-sm text-center bg-red-500/20 p-3 rounded-xl">
                {error}
              </div>
            )}

            {/* Set Password Button */}
            <button
              type="submit"
              className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Simpan Password
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-orange-300 opacity-50"></div>
            <span className="px-4 text-sm opacity-75">atau</span>
            <div className="flex-1 border-t border-orange-300 opacity-50"></div>
          </div>

          {/* Back to Login */}
          <div className="text-center">
            <button
              type="button"
              onClick={handleBackToLogin}
              className="text-sm text-white hover:text-orange-200 underline transition-colors duration-200 flex items-center justify-center mx-auto"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetNewPassword;
