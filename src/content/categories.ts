export const categoryIds = [
  "official",
  "inventory",
  "builds",
  "weapons",
  "activities",
  "stats",
  "cosmetics",
  "social",
] as const;

export type CategoryId = (typeof categoryIds)[number];

export type CategoryIcon =
  | "badge"
  | "package"
  | "hammer"
  | "crosshair"
  | "compass"
  | "barChart"
  | "sparkles"
  | "users";

export type ToolCategory = {
  id: CategoryId;
  label: string;
  description: string;
  icon: CategoryIcon;
  accent: string;
};

export const categories: ToolCategory[] = [
  {
    id: "official",
    label: "Official",
    description: "Bungie update notes, support pages, and player-facing resources.",
    icon: "badge",
    accent: "text-amber-300 border-amber-300/35 bg-amber-300/10",
  },
  {
    id: "inventory",
    label: "Inventory",
    description: "Vault management, gear moves, tags, and loadouts.",
    icon: "package",
    accent: "text-cyan-300 border-cyan-300/35 bg-cyan-300/10",
  },
  {
    id: "builds",
    label: "Builds",
    description: "Armor stats, subclass setups, and shareable build pages.",
    icon: "hammer",
    accent: "text-emerald-300 border-emerald-300/35 bg-emerald-300/10",
  },
  {
    id: "weapons",
    label: "Weapons",
    description: "Rolls, perks, catalysts, sources, and sandbox reference.",
    icon: "crosshair",
    accent: "text-rose-300 border-rose-300/35 bg-rose-300/10",
  },
  {
    id: "activities",
    label: "Activities",
    description: "Weekly rotations, raids, dungeons, maps, and checklists.",
    icon: "compass",
    accent: "text-indigo-200 border-indigo-200/35 bg-indigo-200/10",
  },
  {
    id: "stats",
    label: "Stats",
    description: "PvE, PvP, raid, dungeon, and Trials lookups.",
    icon: "barChart",
    accent: "text-lime-300 border-lime-300/35 bg-lime-300/10",
  },
  {
    id: "cosmetics",
    label: "Cosmetics",
    description: "Eververse, collections, rewards, emblems, and fashion.",
    icon: "sparkles",
    accent: "text-fuchsia-200 border-fuchsia-200/35 bg-fuchsia-200/10",
  },
  {
    id: "social",
    label: "Social",
    description: "Fireteams, clan planning, access checks, and run tracking.",
    icon: "users",
    accent: "text-orange-200 border-orange-200/35 bg-orange-200/10",
  },
];
