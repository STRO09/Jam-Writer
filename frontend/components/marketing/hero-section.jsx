import { Music, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center">
      <div className="flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground mb-8">
        <Music className="h-4 w-4 text-primary" />
        <span>Real-time music collaboration</span>
      </div>

      <h1 className="max-w-4xl text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
        Write music together.{" "}
        <span className="text-primary">One line at a time.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
        JamWrite pairs you with a collaborator in a shared room where songs are
        born line by line. No noise, no distractions — just raw creative
        chemistry.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#cta"
          className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Start Jamming
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#features"
          className="inline-flex h-12 items-center gap-2 rounded-lg border border-border bg-secondary px-8 text-base font-semibold text-secondary-foreground transition-colors hover:bg-muted"
        >
          Explore Features
        </a>
      </div>

      <div className="mt-20 w-full max-w-3xl rounded-xl border border-border bg-card p-6 shadow-2xl shadow-primary/5">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="h-3 w-3 rounded-full bg-destructive" />
          <div className="h-3 w-3 rounded-full bg-primary/60" />
          <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">
            room://sunset-ballad
          </span>
        </div>
        <div className="mt-6 space-y-4 text-left font-mono text-sm">
          <div className="flex gap-3">
            <span className="shrink-0 text-primary font-semibold">You</span>
            <p className="text-foreground/80">
              {"The sun went down on everything we knew"}
            </p>
          </div>
          <div className="flex gap-3">
            <span className="shrink-0 text-muted-foreground font-semibold">
              Guest
            </span>
            <p className="text-foreground/80">
              {"And painted all the shadows gold and blue"}
            </p>
          </div>
          <div className="flex gap-3">
            <span className="shrink-0 text-primary font-semibold">You</span>
            <p className="text-foreground/80">
              {"We held the silence like a melody"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="shrink-0 text-muted-foreground font-semibold">
              Guest
            </span>
            <span className="inline-block h-5 w-px animate-pulse bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
