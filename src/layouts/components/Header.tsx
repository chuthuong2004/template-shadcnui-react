import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/layouts/components/MainNav";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl px-4 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <a href={"#"} rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.GitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <a href={"#"} rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "w-10 px-0 hidden sm:inline-flex"
                )}
              >
                <Icons.Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
            {/* <MobileToggle />
            <MobileNav /> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
