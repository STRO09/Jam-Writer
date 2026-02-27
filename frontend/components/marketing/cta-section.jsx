import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-12 text-center md:p-16">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Your next song is one room away
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground leading-relaxed md:text-lg">
          Stop writing alone. Open a room, invite a collaborator, and let the
          words flow. It{"'"}s free, fast, and feels like magic.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Create a Room
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-border bg-secondary px-8 text-base font-semibold text-secondary-foreground transition-colors hover:bg-muted"
          >
            Join a Room
          </a>
        </div>
      </div>
    </section>
  );
}
