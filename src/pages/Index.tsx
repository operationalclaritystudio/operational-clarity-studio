import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  Search,
  Stethoscope,
  PencilRuler,
  Rocket,
  ClipboardCheck,
  Workflow,
  FileText,
  BookOpen,
  LayoutGrid,
  Sparkles,
  Check,
  Mail,
  Menu,
  X,
  Award,
  GraduationCap,
  Bot,
  Layers,
  UserCheck,
  Compass,
  ListChecks,
  FolderCog,
  Linkedin,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import HeroVisual from "@/components/HeroVisual";
import BrandMark from "@/components/BrandMark";
import ResourceThumb from "@/components/ResourceThumb";
import { useReveal } from "@/hooks/use-reveal";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Audit", href: "#audit" },
  { label: "Process", href: "#process" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: ClipboardCheck, title: "Operational Intelligence Audit™", body: "A focused diagnostic of workflows, communication gaps, documentation, and risk — with a prioritized action plan." },
  { icon: Workflow,       title: "Workflow Optimization",         body: "Redesign inefficient processes so work moves clearly, consistently, and without hand-off friction." },
  { icon: FileText,       title: "SOP Development",               body: "Repeatable standard operating procedures that improve consistency, training, and accountability." },
  { icon: BookOpen,       title: "Knowledge Management",          body: "Organize business knowledge so it's easy to find, update, and transfer as your team grows." },
  { icon: LayoutGrid,     title: "Administrative Systems",        body: "Practical systems for scheduling, task tracking, reporting, and daily operations." },
  { icon: Sparkles,       title: "AI Workflow Automation",        body: "Identify and implement AI-enabled improvements that reduce repetitive work and support execution." },
];

const trust = [
  { icon: Award,        title: "20+ Years Operations Experience",   body: "Deep hands-on background across administration, compliance, and business support." },
  { icon: GraduationCap,title: "Business Management & Marketing",   body: "Formal education in Business Management & Marketing, Lenoir-Rhyne University." },
  { icon: Bot,          title: "AI Workflow Automation",            body: "Practical, current expertise applying AI inside real operational workflows." },
  { icon: Layers,       title: "Cross-Industry Operational Range",  body: "Distilleries, manufacturing, construction, and professional services." },
  { icon: UserCheck,    title: "Founder-Led Consulting",            body: "You work directly with Melissa — not a rotating team of associates." },
  { icon: Compass,      title: "Customized Recommendations",        body: "Every deliverable is built around your business — never a rebranded template." },
];

const process = [
  { icon: Search,       title: "Discover",  body: "Map current operations, pain points, systems, and growth goals." },
  { icon: Stethoscope,  title: "Diagnose",  body: "Surface bottlenecks, documentation gaps, and process breakdowns." },
  { icon: PencilRuler,  title: "Design",    body: "Build workflows, SOPs, and automations tailored to the business." },
  { icon: Rocket,       title: "Deliver",   body: "Ship recommendations, implementation support, and usable tools." },
];

const resources = [
  { icon: FolderCog,  kind: "sop"       as const, title: "SOP Starter Bundle",        body: "Ready-to-adapt templates for the SOPs every growing business needs first." },
  { icon: ListChecks, kind: "checklist" as const, title: "Workflow Audit Checklist",  body: "A structured self-audit for spotting bottlenecks, gaps, and hidden manual work." },
  { icon: Bot,        kind: "prompts"   as const, title: "AI Prompt Library for Ops", body: "Vetted prompts for documentation, meeting notes, SOP drafting, and triage." },
  { icon: BookOpen,   kind: "docs"      as const, title: "Process Documentation Kit", body: "Frameworks and formats for capturing and maintaining institutional knowledge." },
];

const auditIncludes = [
  "Workflow & communication audit across your top operational areas",
  "Documentation & SOP maturity assessment",
  "Bottleneck, risk, and manual-work inventory",
  "AI-enablement opportunities scored by effort vs. impact",
  "Prioritized 30 / 60 / 90 day action plan",
  "Executive summary you can share with your team",
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourceEmail, setResourceEmail] = useState("");
  useReveal();

  const handleResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resourceEmail) return;
    toast({ title: "You're on the list.", description: "We'll be in touch when resources launch." });
    setResourceEmail("");
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message received.", description: "Melissa will follow up within one business day." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-charcoal">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass mt-4 rounded-2xl px-5 py-3 flex items-center justify-between shadow-soft">
            <a href="#top" className="group flex items-center gap-2.5 font-display font-bold text-charcoal">
              <span className="transition-transform duration-500 group-hover:rotate-[8deg]"><BrandMark size={26} /></span>
              <span className="tracking-tight text-[15px]">Operational Clarity Studio<span className="text-teal">™</span></span>
            </a>
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-charcoal/75">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="relative py-1 hover:text-teal transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:bg-teal after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="hidden lg:block">
              <Button asChild className="rounded-full bg-charcoal hover:bg-teal text-white font-semibold transition-all duration-300 hover:shadow-glow">
                <a href="#contact"><Calendar className="mr-2 h-4 w-4" />Discovery Call</a>
              </Button>
            </div>
            <button
              className="lg:hidden p-2 rounded-md text-charcoal"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {menuOpen && (
            <div className="lg:hidden glass mt-2 rounded-2xl p-5 shadow-soft space-y-3">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="block text-charcoal/80 hover:text-teal font-medium">
                  {n.label}
                </a>
              ))}
              <Button asChild className="w-full rounded-full bg-charcoal text-white">
                <a href="#contact" onClick={() => setMenuOpen(false)}>Discovery Call</a>
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-40 pb-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40"
             style={{ backgroundImage: "radial-gradient(hsl(174 59% 27% / 0.14) 1px, transparent 1px)", backgroundSize: "24px 24px", maskImage: "linear-gradient(to bottom, black, transparent)" }} />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-mint/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" /> Boutique Operations Consulting
            </span>
            <h1 className="mt-6 text-[3rem] sm:text-6xl lg:text-[5rem] font-bold font-display leading-[0.95] text-charcoal">
              Where Operational <span className="italic text-teal">Chaos</span> Becomes Operational <span className="relative inline-block">
                <span className="relative z-10">Clarity™</span>
                <span aria-hidden className="absolute inset-x-0 bottom-1.5 h-3 bg-mint/70 -z-0 rounded-sm" />
              </span>
            </h1>
            <p className="mt-7 max-w-md text-lg text-charcoal/65 leading-relaxed">
              Practical systems, smarter workflows, and AI-powered improvements for growing businesses.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="group rounded-full bg-charcoal hover:bg-teal text-white font-semibold transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5">
                <a href="#contact"><Calendar className="mr-2 h-4 w-4" />Schedule Discovery Call</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group rounded-full border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white transition-all">
                <a href="#audit">See the Audit <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></a>
              </Button>
            </div>
          </div>
          <div className="relative fade-up">
            <div className="absolute -inset-10 bg-mint/20 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-white ring-1 ring-charcoal/5 bg-white">
              <HeroVisual />
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-card hidden md:flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-mint/20 grid place-items-center"><Workflow className="h-4 w-4 text-teal" /></div>
              <div className="text-xs">
                <div className="font-semibold text-charcoal">One source of truth</div>
                <div className="text-charcoal/60">Board, SOPs, and metrics aligned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-fog">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <div className="font-label text-xs text-teal">Services</div>
            <h2 className="mt-4 text-5xl md:text-6xl font-display font-bold text-charcoal leading-[1.02]">
              The systems behind the business.
            </h2>
            <p className="mt-6 text-lg text-charcoal/65 leading-relaxed max-w-xl">
              Six focused engagements — each designed to remove a specific kind of friction and leave real structure behind.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <a
                key={s.title}
                href="#contact"
                className="reveal group relative rounded-2xl bg-white border border-border/60 p-8 overflow-hidden transition-all duration-500 hover:border-mint/60 hover:shadow-card hover:-translate-y-1"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ background: "radial-gradient(400px circle at 30% 0%, hsl(170 79% 54% / 0.08), transparent 60%)" }} />
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-mint/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="h-12 w-12 rounded-xl bg-mint-soft grid place-items-center transition-all duration-500 group-hover:bg-mint group-hover:rotate-[6deg] group-hover:scale-105">
                  <s.icon className="h-5 w-5 text-teal transition-colors group-hover:text-charcoal" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-display font-bold text-charcoal leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">{s.body}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT (trimmed) */}
      <section id="about" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-14 items-center">
          <div className="lg:col-span-3 reveal">
            <div className="font-label text-xs text-teal">About</div>
            <h2 className="mt-4 text-5xl md:text-6xl font-display font-bold text-charcoal leading-[1.02]">
              Operations expertise, without the deck.
            </h2>
            <p className="mt-7 text-lg text-charcoal/65 leading-relaxed max-w-xl">
              Most growing businesses aren't held back by strategy — they're held back by structure.
              Operational Clarity Studio™ replaces friction with workflows, documentation, and AI-enabled
              systems your team can actually run.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-3xl font-display font-bold text-charcoal">20+</div>
                <div className="mt-1 text-xs font-label text-charcoal/55">Years in ops</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-charcoal">6</div>
                <div className="mt-1 text-xs font-label text-charcoal/55">Industries served</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-teal">1:1</div>
                <div className="mt-1 text-xs font-label text-charcoal/55">Founder-led</div>
              </div>
            </div>
          </div>
          <aside className="lg:col-span-2 reveal">
            <div className="relative rounded-3xl bg-gradient-to-br from-fog to-white border border-border p-8 shadow-card overflow-hidden">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-40 pointer-events-none"
                   style={{ background: "radial-gradient(circle, hsl(170 79% 54% / 0.35), transparent 65%)" }} />
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-2xl bg-white grid place-items-center shadow-soft border border-border/60">
                  <BrandMark size={40} />
                </div>
                <div>
                  <div className="text-[11px] font-label text-teal">Founder</div>
                  <div className="mt-1 font-display font-bold text-charcoal text-lg leading-tight">Melissa McCloud</div>
                  <div className="text-sm text-charcoal/60 font-medium">Operational Improvement Consultant</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Operations", "SOPs", "Compliance", "AI Systems", "Documentation"].map((t) => (
                  <span key={t} className="text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-mint-soft text-teal">{t}</span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border/60 flex items-center justify-between text-xs">
                <div className="text-charcoal/60">Available for new engagements</div>
                <div className="flex items-center gap-1.5 text-teal font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
                  </span>
                  Now booking
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* TRUST / SOCIAL PROOF */}
      <section id="trust" className="py-32 bg-fog">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <div className="font-label text-xs text-teal">Credibility</div>
            <h2 className="mt-4 text-5xl md:text-6xl font-display font-bold text-charcoal leading-[1.02]">
              Why businesses trust <span className="text-teal">Operational Clarity Studio™</span>.
            </h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trust.map((t) => (
              <article key={t.title} className="reveal group rounded-2xl bg-white border border-border/60 p-7 transition-all duration-500 hover:border-mint/60 hover:shadow-card hover:-translate-y-1">
                <div className="h-11 w-11 rounded-xl bg-mint-soft grid place-items-center transition-transform duration-500 group-hover:rotate-[6deg]">
                  <t.icon className="h-5 w-5 text-teal" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-base font-display font-bold text-charcoal leading-snug">{t.title}</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">{t.body}</p>
              </article>
            ))}
          </div>
          {/* Testimonials placeholder — surfaces automatically when populated */}
          {/*
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {testimonials.map((q) => (
              <blockquote key={q.author} className="rounded-2xl bg-white border border-border/60 p-8">
                <p className="text-charcoal/80 leading-relaxed">"{q.quote}"</p>
                <footer className="mt-4 text-sm text-charcoal/60">— {q.author}, {q.role}</footer>
              </blockquote>
            ))}
          </div>
          */}
        </div>
      </section>

      {/* FEATURED OFFER — Operational Intelligence Audit™ */}
      <section id="audit" className="py-32 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none"
             style={{ backgroundImage: "radial-gradient(hsl(170 79% 54% / 0.35) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full pointer-events-none"
             style={{ background: "radial-gradient(circle, hsl(170 79% 54% / 0.25), transparent 65%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-14 items-start">
          <div className="lg:col-span-3 reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-mint/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-mint">
              <Sparkles className="h-3 w-3" /> Flagship Engagement
            </span>
            <h2 className="mt-6 text-5xl md:text-6xl font-display font-bold leading-[1.02]">
              The Operational Intelligence Audit™
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              A focused diagnostic that maps how work actually moves through your business —
              and returns a prioritized plan for what to fix, in what order, and why.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <div className="font-label text-[10px] text-mint">Best for</div>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">Founder- or ops-led businesses (5–100 people) that have outgrown informal systems.</p>
              </div>
              <div>
                <div className="font-label text-[10px] text-mint">Outcome</div>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">A clear, sequenced 30 / 60 / 90 day plan your team can execute — with or without us.</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="group rounded-full bg-mint text-charcoal hover:bg-mint/90 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow">
                <a href="#contact"><Calendar className="mr-2 h-4 w-4" />Book Your Audit</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/25 bg-transparent text-white hover:bg-white hover:text-charcoal">
                <a href="#contact">Ask a question</a>
              </Button>
            </div>
          </div>
          <aside className="lg:col-span-2 reveal">
            <div className="rounded-3xl bg-white/[0.04] border border-white/10 p-8 backdrop-blur-sm">
              <div className="font-label text-[10px] text-mint">What you receive</div>
              <ul className="mt-5 space-y-3.5">
                {auditIncludes.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-0.5 h-5 w-5 rounded-md bg-mint/15 border border-mint/30 grid place-items-center shrink-0">
                      <Check className="h-3 w-3 text-mint" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-white/80 leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>Limited engagements per quarter</span>
                <span className="flex items-center gap-1.5 text-mint font-semibold">
                  <Clock className="h-3.5 w-3.5" /> 2–3 weeks
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-32 bg-white relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <div className="font-label text-xs text-teal">Process</div>
            <h2 className="mt-4 text-5xl md:text-6xl font-display font-bold text-charcoal leading-[1.02]">
              A clear path from friction to function.
            </h2>
          </div>

          <div className="mt-16 relative">
            {/* animated connector across the row */}
            <svg
              aria-hidden
              className="absolute left-0 right-0 top-14 hidden lg:block pointer-events-none"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
              style={{ height: 40, width: "100%" }}
            >
              <path
                className="flow-line"
                d="M 60 20 C 300 -5, 400 45, 600 20 S 900 -5, 1140 20"
                stroke="hsl(174 59% 27% / 0.3)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p, i) => (
                <div
                  key={p.title}
                  className="reveal group relative rounded-2xl bg-white border border-border/60 p-7 transition-all duration-500 hover:border-teal/40 hover:shadow-card hover:-translate-y-1"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-charcoal text-mint grid place-items-center font-display font-bold text-sm shadow-card group-hover:bg-teal transition-colors">
                    0{i + 1}
                  </div>
                  <div className="h-11 w-11 rounded-xl bg-mint-soft grid place-items-center transition-transform duration-500 group-hover:rotate-[8deg]">
                    <p.icon className="h-5 w-5 text-teal" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-display font-bold text-charcoal">{p.title}</h3>
                  <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="py-32 bg-fog">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <div className="font-label text-xs text-teal">Resources</div>
            <h2 className="mt-4 text-5xl md:text-6xl font-display font-bold text-charcoal leading-[1.02]">
              Practical downloads, coming soon.
            </h2>
            <p className="mt-6 text-lg text-charcoal/65 leading-relaxed max-w-xl">
              A growing library of templates, checklists, and playbooks — built to help business owners
              improve operations between engagements.
            </p>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resources.map((r) => (
              <article
                key={r.title}
                className="reveal group relative rounded-2xl bg-white border border-border/60 p-5 transition-all duration-500 hover:border-mint/60 hover:shadow-card hover:-translate-y-1"
              >
                <ResourceThumb kind={r.kind} />
                <div className="mt-5 flex items-center justify-between">
                  <div className="h-9 w-9 rounded-lg bg-mint-soft grid place-items-center transition-transform duration-500 group-hover:rotate-[8deg]">
                    <r.icon className="h-4 w-4 text-teal" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-label text-teal bg-mint-soft rounded-full px-2.5 py-1">Coming Soon</span>
                </div>
                <h3 className="mt-4 text-base font-display font-bold text-charcoal leading-snug">{r.title}</h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">{r.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-white border border-border/60 shadow-soft p-8 md:p-10 grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-3">
              <div className="font-label text-xs text-teal">Early Access</div>
              <h3 className="mt-3 text-2xl md:text-3xl font-display font-bold text-charcoal leading-tight">
                Be first when new resources launch.
              </h3>
              <p className="mt-2 text-sm text-charcoal/60">No spam. Occasional, practical drops only.</p>
            </div>
            <form onSubmit={handleResource} className="md:col-span-2 flex flex-col sm:flex-row gap-3">
              <Label htmlFor="resource-email" className="sr-only">Email address</Label>
              <Input
                id="resource-email"
                type="email"
                required
                placeholder="you@company.com"
                value={resourceEmail}
                onChange={(e) => setResourceEmail(e.target.value)}
                className="rounded-full h-12 bg-fog border-border"
              />
              <Button type="submit" className="rounded-full h-12 px-6 bg-charcoal hover:bg-teal text-white font-semibold transition-all hover:shadow-glow">
                Join List
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <div className="font-label text-xs text-teal">Contact</div>
            <h2 className="mt-4 text-5xl md:text-6xl font-display font-bold text-charcoal leading-[1.02]">
              Let's bring clarity to your operations.
            </h2>
            <p className="mt-6 text-lg text-charcoal/65 leading-relaxed max-w-md">
              Start with a complimentary discovery call, or send a note about what you're navigating.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Response within 1 business day",
                "Complimentary 15-minute Discovery Call",
                "No obligation, no pressure",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-charcoal/75">
                  <span className="h-5 w-5 rounded-md bg-mint/20 grid place-items-center">
                    <Check className="h-3 w-3 text-teal" strokeWidth={3} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl bg-fog border border-border/60 p-6 space-y-2">
              <div className="font-display font-bold text-charcoal">Melissa McCloud</div>
              <div className="text-sm text-teal">Founder & Operational Improvement Consultant</div>
              <a href="mailto:contact@operationalclaritystudio.com" className="mt-2 flex items-center gap-2 text-sm text-charcoal/80 hover:text-teal transition-colors">
                <Mail className="h-4 w-4" /> contact@operationalclaritystudio.com
              </a>
              <div className="text-sm text-charcoal/60">operationalclaritystudio.com</div>
            </div>
          </div>

          <form onSubmit={handleContact} className="lg:col-span-3 rounded-3xl bg-fog border border-border/60 p-8 shadow-soft grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="c-name">Name</Label>
              <Input id="c-name" name="name" required className="mt-2 bg-white" />
            </div>
            <div>
              <Label htmlFor="c-company">Company</Label>
              <Input id="c-company" name="company" className="mt-2 bg-white" />
            </div>
            <div>
              <Label htmlFor="c-email">Email</Label>
              <Input id="c-email" type="email" name="email" required className="mt-2 bg-white" />
            </div>
            <div>
              <Label htmlFor="c-phone">Phone</Label>
              <Input id="c-phone" type="tel" name="phone" className="mt-2 bg-white" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="c-biz">What best describes your business?</Label>
              <Input id="c-biz" name="business" placeholder="e.g. Craft distillery, manufacturer, professional services" className="mt-2 bg-white" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="c-challenge">What operational challenge are you trying to solve?</Label>
              <Input id="c-challenge" name="challenge" className="mt-2 bg-white" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="c-message">Message</Label>
              <Textarea id="c-message" name="message" rows={5} className="mt-2 bg-white" />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="group w-full sm:w-auto rounded-full bg-charcoal hover:bg-teal text-white font-semibold transition-all hover:shadow-glow">
                Send Message <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-white/80 pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5 font-display font-bold text-white">
              <BrandMark size={26} />
              Operational Clarity Studio<span className="text-mint">™</span>
            </div>
            <p className="mt-3 text-sm text-white/60 max-w-sm">Turning Operational Chaos Into Operational Clarity™</p>
            <a href="mailto:contact@operationalclaritystudio.com" className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-mint transition-colors">
              <Mail className="h-4 w-4" /> contact@operationalclaritystudio.com
            </a>
          </div>
          <div>
            <div className="font-label text-[10px] text-white/50">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="text-white/70 hover:text-mint transition-colors">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-label text-[10px] text-white/50">Connect</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-mint transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </li>
              <li><a href="#" className="text-white/70 hover:text-mint transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-mint transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-14 pt-6 border-t border-white/10 text-xs text-white/40 flex flex-wrap justify-between gap-3">
          <div>© {new Date().getFullYear()} Operational Clarity Studio™. All rights reserved.</div>
          <div>Built with clarity.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;