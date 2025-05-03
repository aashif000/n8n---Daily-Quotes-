
import React from 'react';
import QuoteLayout from "@/components/QuoteLayout";
import QuoteCard from "@/components/QuoteCard";
import { useQuote } from "@/hooks/useQuote";

const Index = () => {
  const { quote, loading, remainingTime, handleRefresh } = useQuote();

  return (
    <QuoteLayout>
      <div className="w-full flex flex-col items-center px-4">
        <QuoteCard 
          quote={quote}
          loading={loading}
          remainingTime={remainingTime}
          handleRefresh={handleRefresh}
        />
      </div>
    </QuoteLayout>
  );
};

export default Index;
