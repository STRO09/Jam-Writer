import { Music } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <Music className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            JamWrite
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} JamWrite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
