import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

export function MainNav() {
  const { pathname } = useLocation();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        {/* <img
          src="/logo.svg"
          alt="Logo"
          className="w-8 h-8 rounded-full bg-primary/20"
        /> */}
        <span className="font-bold">Logo</span>
      </Link>
      <Link
        to="/blog"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>
      <Link
        to="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
    </nav>
  );
}
