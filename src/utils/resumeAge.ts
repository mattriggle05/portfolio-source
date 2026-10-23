/** Calendar-day age, refreshed in the visitor's timezone. */
export function formatResumeAge(updated: string, now = new Date()): string {
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.max(0, Math.floor((today - Date.parse(`${updated}T00:00:00Z`)) / 86_400_000));
  const format = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (days === 0) return "today";
  if (days < 7) return `${days} ${days === 1 ? "day" : "days"} ago`;
  if (days < 30) return format.format(-Math.floor(days / 7), "week");
  if (days < 365) return format.format(-Math.floor(days / 30), "month");
  return format.format(-Math.floor(days / 365), "year");
}
