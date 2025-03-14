'use client';

import React, { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "./components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata moved to a separate file

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white relative overflow-auto`}
      >
        <AnimatedBackground />
        <div className="absolute inset-0 bg-slate-100/90 dark:bg-slate-800/90 z-0"></div>
        <main className="min-h-screen relative z-20">
          <nav className="fixed top-0 w-full bg-slate-800/80 backdrop-blur-sm z-50 py-5">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Kolade Portfolio
              </h1>
              <div className="hidden md:flex space-x-8">
                <a href="#home" className="hover:text-purple-500 transition-colors">Home</a>
                <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
                <a href="#skills" className="hover:text-purple-500 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-purple-500 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a>
              </div>
              <div className="hidden lg:flex items-center space-x-2 ml-8 bg-slate-700/50 px-3 py-1 rounded-full">
                <span className="text-xs text-purple-300">Skills:</span>
                <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">React</span>
                <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">Next.js</span>
                <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">Node.js</span>
              </div>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-slate-800 py-4 px-4">
                <div className="flex flex-col space-y-4">
                  <a 
                    href="#home" 
                    className="hover:text-purple-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >Home</a>
                  <a 
                    href="#about" 
                    className="hover:text-purple-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >About</a>
                  <a 
                    href="#skills" 
                    className="hover:text-purple-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >Skills</a>
                  <a 
                    href="#projects" 
                    className="hover:text-purple-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >Projects</a>
                  <a 
                    href="#contact" 
                    className="hover:text-purple-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >Contact</a>
                </div>
              </div>
            )}
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
