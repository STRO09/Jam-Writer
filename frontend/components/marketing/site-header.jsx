import { Music } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2" aria-label="JamWrite home">
          <Music className="h-5 w-5 text-primary" />
          <span className="text-base font-bold text-foreground">JamWrite</span>
        </a>
        <div className="hidden items-center gap-8 sm:flex">
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            How it Works
          </a>
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#cta"
            className="inline-flex h-9 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
}
