'use client';

import { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">CodeQuestAI</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 font-medium hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link href="/app">
              <Button>Get Started</Button>
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#features"
              className="block text-gray-600 hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block text-gray-600 hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="block text-gray-600 hover:text-primary"
            >
              Contact
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Link href="/app">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
