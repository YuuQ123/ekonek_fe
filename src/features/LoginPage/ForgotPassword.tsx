import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Reset password for:', email);
    // Redirect to verification code page
    window.location.href = '/verification-code';
  };

  const handleBackToLogin = () => {
    window.history.back();
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
              <h2 className="text-xl font-semibold mb-2">Instruksi Terkirim</h2>
              <p className="text-sm opacity-90">
                Silakan periksa email atau WhatsApp Anda
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
                Kami telah mengirimkan instruksi reset password ke email/WhatsApp Anda untuk melanjutkan proses.
              </p>
            </div>

            {/* Continue Button */}
            <button
              onClick={() => {
                // Redirect to verification code page
                window.location.href = '/verification-code';
              }}
              className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-4"
            >
              Lanjutkan
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-orange-300 opacity-50"></div>
              <span className="px-4 text-sm opacity-75">atau</span>
              <div className="flex-1 border-t border-orange-300 opacity-50"></div>
            </div>

            {/* Back to Login Button */}
            <div className="text-center">
              <button
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Forgot Password Card */}
        <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-3xl shadow-2xl p-8 text-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">eKonek</h1>
            <h2 className="text-xl font-semibold mb-2">Lupa Password</h2>
            <p className="text-sm opacity-90">
              Masukkan email atau nomor WhatsApp yang terdaftar
            </p>
          </div>

          {/* Forgot Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email/WhatsApp Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email/WhatsApp
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                placeholder="Masukkan email atau WhatsApp"
                required
              />
            </div>

            {/* Send Instructions Button */}
            <button
              type="submit"
              className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Send Instructions
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

export default ForgotPassword;
