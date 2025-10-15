import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import ListingsSection from "@/components/ListingsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <FilterBar />
        <ListingsSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
