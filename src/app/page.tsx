import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Compass,
  Crosshair,
  Hammer,
  Package,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { categories, type CategoryIcon } from "@/content/categories";
import { currentUpdateLinks, quickStartLinks } from "@/content/featured";
import { tools, type ToolLink } from "@/content/tools";

const iconMap: Record<CategoryIcon, LucideIcon> = {
  badge: BadgeCheck,
  package: Package,
  hammer: Hammer,
  crosshair: Crosshair,
  compass: Compass,
  barChart: BarChart3,
  sparkles: Sparkles,
  users: Users,
};

function getDomain(href: string) {
  return new URL(href).hostname.replace(/^www\./, "");
}

function getFaviconUrl(href: string, iconUrl?: string) {
  if (iconUrl) {
    return iconUrl;
  }

  return `https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(getDomain(href))}`;
}

function ExternalLinkCard({
  title,
  href,
  description,
  eyebrow,
  iconUrl,
}: {
  title: string;
  href: string;
  description: string;
  eyebrow?: string;
  iconUrl?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3 outline-none transition hover:border-white/25 hover:bg-white/[0.06] focus-visible:border-amber-300 focus-visible:ring-2 focus-visible:ring-amber-300/40"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-black/20">
        <Image
          src={getFaviconUrl(href, iconUrl)}
          alt=""
          width={24}
          height={24}
          className="size-6 rounded-sm"
        />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="truncate text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
            {eyebrow ?? getDomain(href)}
          </span>
        </span>
        <span className="mt-1 flex items-start justify-between gap-3">
          <span className="block text-base font-semibold text-zinc-50">
            {title}
          </span>
          <ArrowUpRight className="mt-1 size-4 shrink-0 text-zinc-500 transition group-hover:text-zinc-100" />
        </span>
        <span className="mt-1 block text-sm leading-6 text-zinc-400">
          {description}
        </span>
      </span>
    </a>
  );
}

function ToolCard({ tool }: { tool: ToolLink }) {
  const category = categories.find((item) => item.id === tool.category);

  return (
    <a
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-52 flex-col rounded-lg border border-white/10 bg-[#111316]/90 p-4 outline-none transition hover:border-white/25 hover:bg-[#171a1f] focus-visible:border-amber-300 focus-visible:ring-2 focus-visible:ring-amber-300/40"
    >
      <span className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex size-11 items-center justify-center rounded-md border bg-black/20 ${category?.accent ?? "border-white/20 text-zinc-100"}`}
          aria-hidden="true"
        >
          <Image
            src={getFaviconUrl(tool.href, tool.iconUrl)}
            alt=""
            width={28}
            height={28}
            className="size-7 rounded-sm"
          />
        </span>
        <ArrowUpRight className="size-4 text-zinc-500 transition group-hover:text-zinc-100" />
      </span>
      <span className="mt-5 min-w-0">
        <span className="block break-words text-lg font-semibold text-zinc-50">
          {tool.title}
        </span>
        <span className="mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
          {getDomain(tool.href)}
        </span>
      </span>
      <span className="mt-3 block flex-1 text-sm leading-6 text-zinc-400">
        {tool.description}
      </span>
      <span className="mt-5 flex flex-wrap gap-2">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </span>
    </a>
  );
}

export default function Home() {
  const groupedTools = categories.map((category) => ({
    ...category,
    tools: tools.filter((tool) => tool.category === category.id),
  }));

  return (
    <main className="page-shell min-h-screen text-zinc-100">
      <header className="border-b border-white/10 bg-[#08090b]/90">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="flex items-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-amber-300/40"
            aria-label="Leylines home"
          >
            <span className="flex size-9 items-center justify-center rounded-md border border-amber-300/30 bg-amber-300/10 text-amber-200">
              <Compass className="size-5" />
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-200">
              Leylines
            </span>
          </a>
          <div className="flex items-center gap-2 text-sm">
            <a
              href="#update"
              className="hidden rounded-md px-3 py-2 text-zinc-400 outline-none transition hover:bg-white/5 hover:text-zinc-100 focus-visible:ring-2 focus-visible:ring-amber-300/40 sm:inline-flex"
            >
              Update
            </a>
            <a
              href="#tools"
              className="rounded-md border border-white/10 px-3 py-2 text-zinc-200 outline-none transition hover:border-white/25 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-amber-300/40"
            >
              Tools
            </a>
          </div>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:px-8"
      >
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
            Updated for Monument of Triumph
          </p>
          <h1 className="text-balance mt-4 max-w-4xl text-3xl font-semibold tracking-normal text-zinc-50 sm:text-5xl">
            Leylines
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            Destiny 2 tools and official references, organized by task.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {quickStartLinks.map((link) => (
              <ExternalLinkCard key={link.href} {...link} />
            ))}
          </div>
        </div>

        <aside
          id="update"
          className="rounded-lg border border-amber-200/20 bg-[#14120d]/70 p-4"
          aria-labelledby="update-title"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200/80">
                Current update
              </p>
              <h2 id="update-title" className="mt-2 text-xl font-semibold">
                Monument of Triumph
              </h2>
            </div>
            <BadgeCheck className="mt-1 size-6 text-amber-200" />
          </div>
          <p className="mt-4 text-sm leading-6 text-zinc-300">
            Bungie sources first, with community tools for the refreshed gear
            economy close by.
          </p>
          <div className="mt-4 space-y-3">
            {currentUpdateLinks.map((link) => (
              <ExternalLinkCard key={link.href} {...link} />
            ))}
          </div>
        </aside>
      </section>

      <section
        id="tools"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
        aria-labelledby="tools-title"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Directory
            </p>
            <h2 id="tools-title" className="mt-2 text-2xl font-semibold">
              {tools.length} links
            </h2>
          </div>
        </div>

        <div className="mt-8 space-y-12">
          {groupedTools.map((category) => {
            const Icon = iconMap[category.icon];

            return (
              <section key={category.id} aria-labelledby={`${category.id}-title`}>
                <div className="mb-4 flex items-start gap-3">
                  <span
                    className={`inline-flex size-10 items-center justify-center rounded-md border ${category.accent}`}
                    aria-hidden="true"
                  >
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 id={`${category.id}-title`} className="text-xl font-semibold">
                      {category.label}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-400">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.tools.map((tool) => (
                    <ToolCard key={tool.href} tool={tool} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm leading-6 text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Leylines is an unofficial fan-made link directory.</p>
          <p>
            Destiny 2 and related media are trademarks and property of Bungie.
          </p>
        </div>
      </footer>
    </main>
  );
}
