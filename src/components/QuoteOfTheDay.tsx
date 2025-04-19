
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Quote = {
  text: string;
  author: string;
  source?: string;
};

const quotes: Quote[] = [
  {
    text: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Compassion is the basis of morality.",
    author: "Arthur Schopenhauer"
  },
  {
    text: "Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.",
    author: "Dalai Lama XIV"
  },
  {
    text: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.",
    author: "Dalai Lama XIV"
  },
  {
    text: "The purpose of human life is to serve, and to show compassion and the will to help others.",
    author: "Albert Schweitzer"
  },
  {
    text: "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.",
    author: "Albert Einstein"
  },
  {
    text: "If your compassion does not include yourself, it is incomplete.",
    author: "Jack Kornfield"
  }
];

interface QuoteOfTheDayProps {
  className?: string;
}

const QuoteOfTheDay = ({ className }: QuoteOfTheDayProps) => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    // Get a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  if (!quote) return null;

  return (
    <div className={cn(
      "glass-card p-6 md:p-8 rounded-xl max-w-2xl mx-auto relative overflow-hidden animate-fade-in",
      className
    )}>
      <div className="absolute top-0 left-0 w-1 h-full bg-sacred"></div>
      <blockquote className="relative z-10">
        <p className="text-lg md:text-xl italic font-serif mb-4">{quote.text}</p>
        <footer className="text-right">
          <cite className="flex justify-end items-center">
            <span className="w-8 h-px bg-sacred mx-2"></span>
            <span className="font-medium">{quote.author}</span>
          </cite>
          {quote.source && (
            <p className="text-sm text-muted-foreground mt-1">{quote.source}</p>
          )}
        </footer>
      </blockquote>
    </div>
  );
};

export default QuoteOfTheDay;
