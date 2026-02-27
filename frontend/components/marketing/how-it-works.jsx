import { PenLine, Radio, Mic } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PenLine,
    title: "Create or join a room",
    description:
      "Spin up a private room in one click or join a friend with a shared link. No sign-ups, no friction.",
  },
  {
    number: "02",
    icon: Radio,
    title: "Collaborate live",
    description:
      "Take turns writing lyrics in real time. See every word appear as your partner types. Pure creative flow.",
  },
  {
    number: "03",
    icon: Mic,
    title: "Build a song together",
    description:
      "Watch your song take shape line by line. Export, share, or keep writing — the session is yours.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            How it works
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Three steps to your next song
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
            >
              <span className="text-5xl font-bold text-muted-foreground/20">
                {step.number}
              </span>
              <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
