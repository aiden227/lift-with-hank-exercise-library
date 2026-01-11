import React, { useState } from 'react';
import { Lock } from 'lucide-react';

export default function LoginScreen({ onLogin }) {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(password, (success) => {
            if (!success) {
                setError(true);
                setPassword('');
            }
        });
    };

    return (
        <div className="min-h-screen bg-[#F9FAFA] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 sm:p-12">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-[#F2AFBC]/30 rounded-full flex items-center justify-center">
                            <Lock className="w-8 h-8 text-[#9E182B]" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-center text-[#333333] mb-2 font-poppins">
                        Lift with Hank
                    </h1>
                    <p className="text-center text-[#555555] mb-8">
                        Please enter your access key to continue
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError(false);
                                }}
                                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition-all duration-200 ${error
                                        ? 'border-red-500 focus:ring-red-200 bg-red-50'
                                        : 'border-gray-200 focus:border-[#9E182B] focus:ring-[#F2AFBC]'
                                    }`}
                                placeholder="Access Key"
                                autoFocus
                            />
                            {error && (
                                <p className="mt-2 text-sm text-red-500 text-center animate-pulse">
                                    Incorrect access key
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#9E182B] hover:bg-[#D63637] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg shadow-[#9E182B]/20"
                        >
                            Enter Library
                        </button>
                    </form>
                </div>
                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-400">
                        Protected content for authorized users only
                    </p>
                </div>
            </div>
        </div>
    );
}
