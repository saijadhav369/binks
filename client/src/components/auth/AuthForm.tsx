import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
// import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Mail, Lock, LogIn } from 'lucide-react';
import { AuthMode, AuthFormData } from '../../types/auth';
import { useState } from 'react';


const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const signupSchema = loginSchema.extend({
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const AuthForm = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle successful login
  const handleLoginSuccess = (credentialResponse: any) => {
    console.log("Login Success:", credentialResponse);

    // Get user info from credentialResponse
    const user = {
      name: credentialResponse?.profileObj?.name,
      profilePic: credentialResponse?.profileObj?.imageUrl,
    };

    // Save user info to localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to the /hero page
    navigate("/hero");
  };

  // Handle login failure
  const handleLoginError = () => {
    console.error("Login Failed");
    // Handle login failure logic (e.g., show an error message)
  };

  // abse mera old code

 

  //abse sorry
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  
  const schema = mode === 'login' ? loginSchema : signupSchema;
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: AuthFormData) => {
    console.log(data);
  };


  return (
    <div className="auth-form">
      {/* <h1>Login</h1> */}
      

<div className="w-full max-w-md mx-auto">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>

        <GoogleLogin
        onSuccess={handleLoginSuccess} // Use the success handler
        onError={handleLoginError}      // Use the error handler
      />

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-900 text-white/60">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-white/40" />
              <input
                type="email"
                placeholder="Email address"
                {...register('email')}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 pl-12 text-white placeholder-white/40 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-white/40" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password')}
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 pl-12 text-white placeholder-white/40 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-white/40 hover:text-white/60"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-400">{errors.password.message}</p>
            )}
          </div>

          {mode === 'signup' && (
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-white/40" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm password"
                  {...register('confirmPassword')}
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 pl-12 text-white placeholder-white/40 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">{errors.confirmPassword.message}</p>
              )}
            </div>
          )}

          {mode === 'login' && (
            <div className="flex justify-end">
              <button type="button" className="text-sm text-white/60 hover:text-white">
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
          >
            <LogIn className="h-5 w-5" />
            <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
          </button>
        </form>

        <p className="mt-6 text-center text-white/60">
          {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-green-500 hover:text-green-400"
          >
            {mode === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
    </div>
  );
};
