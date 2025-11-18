import React, { useState } from 'react';

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (newPassword !== confirmPassword) {
      setError('Password tidak cocok!');
      return;
    }
    
    if (newPassword.length < 6) {
      setError('Password minimal 6 karakter!');
      return;
    }
    
    // Handle reset password logic here
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
              <h2 className="text-xl font-semibold mb-2">Password Berhasil Diubah</h2>
              <p className="text-sm opacity-90">
                Password Anda telah berhasil diperbarui
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
                Anda sekarang dapat login dengan password baru yang telah dibuat.
              </p>
            </div>

            {/* Back to Login Button */}
            <button
              onClick={handleBackToLogin}
              className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Kembali ke Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Reset Password Card */}
        <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-3xl shadow-2xl p-8 text-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">eKonek</h1>
            <h2 className="text-xl font-semibold mb-2">Atur Password Baru</h2>
            <p className="text-sm opacity-90">
              Buat password baru untuk akun Anda
            </p>
          </div>

          {/* Reset Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password Input */}
            <div>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Password Baru"
                className="w-full px-4 py-3 bg-white text-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 text-sm"
                required
                minLength={6}
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Konfirmasi Password Baru"
                className="w-full px-4 py-3 bg-white text-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 text-sm"
                required
                minLength={6}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-200 text-sm text-center bg-red-500/20 p-3 rounded-xl">
                {error}
              </div>
            )}

            {/* Reset Password Button */}
            <button
              type="submit"
              className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Ubah Password
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

export default ResetPassword;
