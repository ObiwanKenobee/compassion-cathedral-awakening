
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sacred-light/10 to-sacred/5">
      <div className="glass-card p-10 rounded-xl text-center max-w-md">
        <h1 className="text-6xl font-serif mb-6 text-sacred">404</h1>
        <p className="text-xl text-foreground mb-8">
          The path you seek has not yet been illuminated.
        </p>
        <Link to="/">
          <Button className="sacred-gradient">
            Return to the Cathedral
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
