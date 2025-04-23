
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-amiri text-hadara-burgundy font-bold">
              حضارة
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 rtl:space-x-reverse">
            <Button variant="link" asChild>
              <Link to="/" className="text-foreground hover:text-hadara-burgundy">
                الرئيسية
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/countries" className="text-foreground hover:text-hadara-burgundy">
                الدول
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link to="/about" className="text-foreground hover:text-hadara-burgundy">
                عن حضارة
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 bg-background border-b border-border transition-all duration-300 ease-in-out z-50",
            isMenuOpen ? "top-full opacity-100" : "-top-96 opacity-0"
          )}
        >
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className="text-foreground hover:text-hadara-burgundy py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              to="/countries"
              className="text-foreground hover:text-hadara-burgundy py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              الدول
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-hadara-burgundy py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              عن حضارة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
