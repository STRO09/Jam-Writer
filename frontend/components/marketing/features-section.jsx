import { Zap, Lock, Users, Focus } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-time collaboration",
    description:
      "Every keystroke syncs instantly. No lag, no refresh — just fluid, creative conversation between two writers.",
  },
  {
    icon: Lock,
    title: "Private & public rooms",
    description:
      "Keep sessions invite-only with private links or open your room to the community for unexpected inspiration.",
  },
  {
    icon: Users,
    title: "Two-person focused writing",
    description:
      "Designed for duos. No crowded editors, no conflicting voices — just you and one collaborator building something real.",
  },
  {
    icon: Focus,
    title: "Minimal distraction interface",
    description:
      "A clean canvas with nothing in the way. Dark mode, monospaced text, and zen-level focus built in.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Features
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything you need. Nothing you don{"'"}t.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-5 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
