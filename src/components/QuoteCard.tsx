
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "@/types/quote";
import { RefreshCw } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface QuoteCardProps {
  quote: Quote | null;
  loading: boolean;
  remainingTime: number;
  handleRefresh: () => void;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ 
  quote, 
  loading, 
  remainingTime,
  handleRefresh
}) => {
  // Calculate progress percentage for the timer
  const progressValue = (remainingTime / 60) * 100;
  
  return (
    <Card className="w-full max-w-2xl bg-white/90 backdrop-blur-sm shadow-lg border-0 rounded-xl overflow-hidden">
      <CardContent className="p-8 relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-quote-light/30 rounded-br-3xl -translate-x-2 -translate-y-2 z-0" />
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-quote-light/30 rounded-tl-3xl translate-x-2 translate-y-2 z-0" />
        
        <div className="relative z-10">
          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
              <RefreshCw className="h-8 w-8 text-quote-medium animate-spin" />
              <p className="text-quote-dark font-medium">Loading wisdom...</p>
            </div>
          ) : quote ? (
            <div className="min-h-[200px] flex flex-col justify-between">
              <div>
                <div className="text-5xl text-quote-medium font-serif mb-6">"</div>
                <p className="text-xl md:text-2xl mb-4 text-gray-800 font-medium leading-relaxed animate-fade-in">
                  {quote.quote}
                </p>
              </div>
              <div>
                <p className="text-right text-quote-dark italic mt-6 font-medium">
                  — {quote.author}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[200px]">
              <p className="text-gray-500">No quote available</p>
            </div>
          )}
        </div>
      
        {/* Timer and refresh button */}
        <div className="mt-8 space-y-3">
          <Progress value={progressValue} className="h-1.5 bg-gray-200" />
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <span className="inline-block h-2 w-2 rounded-full bg-quote-medium mr-2 animate-pulse-gentle"></span>
              <span>Next quote in {remainingTime}s</span>
            </div>
            <button 
              onClick={handleRefresh}
              className="flex items-center gap-1 text-quote-medium hover:text-quote-dark transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Refresh now</span>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuoteCard;
