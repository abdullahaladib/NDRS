"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { loginService } from '../(service)/login-user';
import { useRouter } from 'next/navigation';

const LogIn = () => {

  const router = useRouter();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as unknown as any;
    const data = {
      email: target.email.value,
      password: target.password.value,
    };
    const result = await loginService(data);
    if (result) {
      router.push("/UserHomePage");
    } else {
      alert("Failed to login");
    }
    
  }
  
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#1E293B] to-[#0F172A] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-2xl bg-[#0F172A] p-8 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or{" "}
            <Link href="/signupPage" className="font-medium text-[#6366F1] hover:text-[#4F46E5]">
              sign up for a new account
            </Link>
            <div></div>
            <Link href="/admin/login" className="font-medium text-[#6366F1] hover:text-[#4F46E5]">
              Log in as Admin
            </Link>
          </p>
        </div>
        <form onSubmit={onSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-t-md border border-gray-600 px-3 py-2 text-black placeholder-gray-400 focus:z-10 focus:border-[#6366F1] focus:outline-none focus:ring-[#6366F1] sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-b-md border border-gray-600 px-3 py-2 text-black placeholder-gray-400 focus:z-10 focus:border-[#6366F1] focus:outline-none focus:ring-[#6366F1] sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 text-[#6366F1] focus:ring-[#6366F1]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-100">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-[#6366F1] hover:text-[#4F46E5]">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#6366F1] py-2 px-4 text-sm font-medium text-white hover:bg-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-[#8B5CF6] group-hover:text-[#7C3AED]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
            <Link href="/"><button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#424844] py-2 px-4 text-sm font-medium text-white hover:bg-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                
              </span>
              Back to Home
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn