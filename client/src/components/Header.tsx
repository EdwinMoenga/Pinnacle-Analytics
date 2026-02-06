import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/20 p-2 rounded-lg group-hover:bg-primary/30 transition-colors">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-white">
            Pinnacle<span className="text-primary">Analytics</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/book-demo">
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 rounded-full px-6">
              Book a Demo
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 p-4 shadow-2xl animate-in slide-in-from-top-5">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium p-2 rounded-lg hover:bg-white/5 transition-colors",
                  location === item.href ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/book-demo" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                Book a Demo
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
