
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import QuoteOfTheDay from "@/components/QuoteOfTheDay";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-sacred-light/10 to-sacred/5 dark:from-sacred-dark/10 dark:to-black/30 -z-10" />
      
      <div className="page-container flex flex-col items-center justify-center min-h-[80vh] gap-10 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-semibold max-w-4xl animate-fade-in">
          Welcome to the 
          <span className="block text-sacred dark:text-sacred-light"> Cathedral of Compassion</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          A sacred-tech platform that helps the destitute rise through tools inspired by 
          spirituality, religion, philosophy, and history.
        </p>
        
        <QuoteOfTheDay className="my-8" />
        
        <Link to="/dashboard" className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="sacred-gradient text-lg font-serif px-8 py-6">
            Begin the Journey to Dignity
          </Button>
        </Link>
      </div>
      
      <div className="page-container mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-serif text-xl mb-3">Daily Rituals</h3>
            <p className="text-foreground/80">Establish sacred practices to anchor your day in meaning.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-serif text-xl mb-3">Find a Mentor</h3>
            <p className="text-foreground/80">Connect with guides from various wisdom traditions.</p>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-serif text-xl mb-3">Track Your Growth</h3>
            <p className="text-foreground/80">Monitor your progress on the path to dignity and compassion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
