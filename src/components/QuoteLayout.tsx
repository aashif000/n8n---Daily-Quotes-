
import React from "react";
import { cn } from "@/lib/utils";

interface QuoteLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const QuoteLayout: React.FC<QuoteLayoutProps> = ({ 
  children,
  className
}) => {
  return (
    <div 
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-100 to-indigo-100 animate-gradient-shift",
        className
      )}
    >
      <div className="max-w-6xl w-full">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-quote-light/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-quote-medium/20 rounded-full blur-3xl animate-pulse-gentle" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-quote-light/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-quote-dark to-quote-medium bg-clip-text text-transparent">
            Daily Inspiration
          </h1>
          <p className="text-gray-600 mt-2">
            Refresh your mind with wisdom that changes every minute
          </p>
        </header>
        
        {/* Main content */}
        <main className="relative z-10 flex flex-col items-center justify-center w-full">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} • Made with ❤️</p>
        </footer>
      </div>
    </div>
  );
};

export default QuoteLayout;
