import React, { useState, useRef, useEffect } from 'react';

const VerificationCode: React.FC = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus on first input when component mounts
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // Handle backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');
    if (verificationCode.length === 4) {
      console.log('Verification code:', verificationCode);
      setIsSubmitted(true);
    }
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
              <h2 className="text-xl font-semibold mb-2">Verifikasi Berhasil</h2>
              <p className="text-sm opacity-90">
                Kode verifikasi berhasil dikonfirmasi
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
                Anda dapat melanjutkan proses reset password dengan membuat password baru.
              </p>
            </div>

            {/* Continue Button */}
            <button
              onClick={() => {
                // Redirect to reset password page
                window.location.href = '/reset-password';
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
        {/* Verification Code Card */}
        <div className="bg-gradient-to-b from-orange-400 to-orange-500 rounded-3xl shadow-2xl p-8 text-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">eKonek</h1>
            <h2 className="text-xl font-semibold mb-2">Konfirmasi</h2>
            <p className="text-sm opacity-90">
              Masukkan kode verifikasi yang telah dikirimkan
            </p>
          </div>

          {/* Verification Code Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 4-Digit Code Input */}
            <div className="flex justify-center space-x-3 mb-6">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-lg font-semibold bg-white text-gray-800 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200"
                />
              ))}
            </div>

            {/* Send Code Verification Button */}
            <button
              type="submit"
              disabled={code.some(digit => !digit)}
              className="w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send Code Verification
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

export default VerificationCode;
