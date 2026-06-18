export type FeaturedLink = {
  title: string;
  href: string;
  description: string;
  eyebrow: string;
  iconUrl?: string;
};

export const currentUpdateLinks: FeaturedLink[] = [
  {
    title: "Update 9.7.0.1",
    href: "https://www.bungie.net/7/en/News/Article/destiny_update_9_7_0_1",
    description: "June 16, 2026 hotfix.",
    eyebrow: "Latest patch",
  },
  {
    title: "Known Issues",
    href: "https://help.bungie.net/hc/en-us/articles/39007140765204-Destiny-2-Known-Issues-and-Vital-Information",
    description: "Current Bungie Help issue list.",
    eyebrow: "Live support",
  },
  {
    title: "Monument FAQ",
    href: "https://help.bungie.net/hc/en-us/articles/50100493304468--13-Monument-of-Triumph-FAQ",
    description: "Power, armor, vendors, and first steps.",
    eyebrow: "Quick answers",
  },
];

export const quickStartLinks: FeaturedLink[] = [
  {
    title: "DIM",
    href: "https://destinyitemmanager.com/en/",
    description: "Inventory and loadouts.",
    eyebrow: "Start here",
  },
  {
    title: "D2 Foundry",
    href: "https://d2foundry.gg/",
    description: "Rolls and perk math.",
    eyebrow: "Weapon rolls",
  },
  {
    title: "Raid Report",
    href: "https://raid.report/",
    description: "Raid history and progress.",
    eyebrow: "Endgame",
  },
];
