
import { useState, useEffect, useCallback } from "react";
import { Quote } from "@/types/quote";
import { fetchRandomQuote } from "@/services/quoteService";
import { useToast } from "@/components/ui/use-toast";

const REFRESH_INTERVAL = 60; // seconds

export const useQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [remainingTime, setRemainingTime] = useState<number>(REFRESH_INTERVAL);
  const { toast } = useToast();

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    try {
      const newQuote = await fetchRandomQuote();
      setQuote(newQuote);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      toast({
        title: "Error",
        description: "Failed to fetch a new quote. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
      setRemainingTime(REFRESH_INTERVAL);
    }
  }, [toast]);

  const handleRefresh = useCallback(() => {
    fetchQuote();
  }, [fetchQuote]);

  // Initial fetch
  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  // Set up timer for auto-refresh
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          fetchQuote();
          return REFRESH_INTERVAL;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [fetchQuote]);

  return {
    quote,
    loading,
    remainingTime,
    handleRefresh
  };
};
