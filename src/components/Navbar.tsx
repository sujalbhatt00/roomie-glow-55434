import { Moon, Sun, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">RoomMate Finder</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#search" className="text-sm font-medium hover:text-primary transition-colors">
              Find Roommates
            </a>
            <a href="#listings" className="text-sm font-medium hover:text-primary transition-colors">
              Browse Rooms
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button variant="default">Sign In</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
