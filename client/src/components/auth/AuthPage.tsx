import React from 'react';
import { Leaf } from 'lucide-react';
import { AuthForm } from './AuthForm';

export function AuthPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Leaf className="h-8 w-8 text-green-500" />
          <span className="text-2xl font-bold text-white">Binks</span>
        </div>
        
        <AuthForm />
        
        <p className="mt-8 text-center text-sm text-white/40">
          By continuing, you agree to Binks's{' '}
          <a href="#" className="text-green-500 hover:text-green-400">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-green-500 hover:text-green-400">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}