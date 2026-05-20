'use client';

import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">₦</span>
              </div>
              <span className="font-bold text-xl hidden sm:inline">SkillPay NG</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/careers" className="hover:text-primary-600 font-medium">
              Careers
            </Link>
            <Link href="/compare" className="hover:text-primary-600 font-medium">
              Compare
            </Link>
            <Link href="/trends" className="hover:text-primary-600 font-medium">
              Trends
            </Link>
            <Link href="/quiz" className="hover:text-primary-600 font-medium">
              Quiz
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDark}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/careers"
              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Careers
            </Link>
            <Link
              href="/compare"
              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Compare
            </Link>
            <Link
              href="/trends"
              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Trends
            </Link>
            <Link
              href="/quiz"
              className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              Quiz
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
