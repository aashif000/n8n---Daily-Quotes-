
import { Quote } from "@/types/quote";

const QUOTE_API_URL = "http://localhost:5678/webhook/quote";

export const fetchRandomQuote = async (): Promise<Quote> => {
  try {
    const response = await fetch(QUOTE_API_URL);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch quote: ${response.status}`);
    }
    
    const data = await response.json();
    return data as Quote;
  } catch (error) {
    console.error("Error fetching quote:", error);
    throw error;
  }
};
