import membersData from "@/data/members.json";

export type BadgeKey =
  | "advisory-council"
  | "it-track"
  | "maintenance-track"
  | "operations-track"
  | "academic-innovation";

export type Member = {
  id: string;
  name: string;
  title: string;
  company: string;
  badges: BadgeKey[];
  /** filename in /public/img/members — placeholder for now, real headshots later */
  headshot?: string | null;
};

export const MEMBERS: Member[] = membersData as Member[];

export const BADGE_LABEL: Record<BadgeKey, string> = {
  "advisory-council": "Advisory Council Member",
  "it-track": "IT Track",
  "maintenance-track": "Maintenance & Reliability",
  "operations-track": "Operations & Production",
  "academic-innovation": "Academic & Innovation",
};

export const BADGE_CLASS: Record<BadgeKey, string> = {
  "advisory-council": "advisory",
  "it-track": "it",
  "maintenance-track": "maintenance",
  "operations-track": "operations",
  "academic-innovation": "academic",
};

export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? "";
  const b = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (a + b).toUpperCase();
}
