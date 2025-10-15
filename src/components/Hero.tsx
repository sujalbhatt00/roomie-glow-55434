import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern shared living space" 
          className="w-full h-full object-cover opacity-10 dark:opacity-5"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Find Your Perfect Roommate
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Connect with compatible roommates and discover your ideal living space.
            Safe, verified, and hassle-free.
          </p>

          <div className="bg-card rounded-2xl shadow-large p-6 max-w-2xl mx-auto border border-border">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input 
                  placeholder="Enter city or neighborhood" 
                  className="h-12 text-base"
                />
              </div>
              <Button size="lg" className="h-12 px-8">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>🏠 10,000+ Listings</span>
            <span>✓ Verified Profiles</span>
            <span>💬 Instant Messaging</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
