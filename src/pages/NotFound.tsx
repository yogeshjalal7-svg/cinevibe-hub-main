import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Film } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <Film className="h-16 w-16 text-primary" />
        </div>
        <h1 className="font-heading text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Oops! The page you're looking for doesn't exist. Maybe the movie was removed from our collection.
        </p>
        <Button 
          onClick={() => navigate("/")} 
          className="gradient-primary text-primary-foreground"
        >
          <Home className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
