import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
          <span className="text-xl font-bold">CreatorHub</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/discover" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Discover
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          <Button variant="ghost" size="icon">
            <Search className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
            Start Selling
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
