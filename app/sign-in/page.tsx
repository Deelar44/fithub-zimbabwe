"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleAuth = () => {
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 dark:bg-gray-950">
      {/* LEFT: Auth Form */}
      <div className="flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tighter">
              {isLogin ? "Welcome back" : "Join FitHub"}
            </h1>
            <p className="text-gray-500">
              {isLogin
                ? "Log in to track your events"
                : "Create an account to get started"}
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Full Name"
                  className="pl-12 h-14 rounded-2xl"
                />
              </div>
            )}
            <div className="relative">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                placeholder="Email address"
                className="pl-12 h-14 rounded-2xl"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="pl-12 pr-12 h-14 rounded-2xl"
              />
              <button
                type="button"
                className="absolute right-4 top-4 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            <Button
              onClick={handleAuth}
              className="w-full h-14 rounded-2xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              {isLogin ? "Log In" : "Create Account"}
            </Button>
          </form>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-full text-sm font-bold text-gray-500 hover:text-emerald-600"
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Log in"}
          </button>
        </div>
      </div>

      {/* RIGHT*/}
      <div className="hidden lg:block relative bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1669323149885-6bda5714e85b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpdG5lc3MlMjBtb3RpdmF0aW9ufGVufDB8fDB8fHww"
          alt="Fitness Motivation"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center p-16">
          <blockquote className="text-white text-3xl font-black tracking-tighter">
            "Your fitness journey begins with one step. Let us help you take
            it."
          </blockquote>
        </div>
      </div>
    </main>
  );
}
