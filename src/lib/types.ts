export type Category = 'trending' | 'us_politics' | 'world' | 'financial' | 'jewish';

export interface Story {
  id: number;
  fetch_date: string;
  category: Category;
  source: string;
  title: string;
  summary: string;
  url?: string;
  published?: string;
}

export interface DateEntry {
  fetch_date: string;
  story_count: number;
}

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'trending',    label: 'Trending'    },
  { id: 'us_politics', label: 'US Politics' },
  { id: 'world',       label: 'World'       },
  { id: 'financial',   label: 'Financial'   },
  { id: 'jewish',      label: 'Jewish'      },
];

export function getCategoryColor(cat: Category): string {
  return `var(--c-${cat})`;
}

export function fmtDateLabel(dateStr: string): string {
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (dateStr === today)     return 'Today';
  if (dateStr === yesterday) return 'Yesterday';
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

export function fmtFullDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

export function fmtTime(isoStr?: string): string {
  if (!isoStr) return '';
  try {
    return new Date(isoStr).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  } catch { return ''; }
}

//const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const API = 'https://kosherheadlinesbe.onrender.com';

export async function fetchDates(): Promise<DateEntry[]> {
  const res = await fetch(`${API}/api/dates`, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error('Failed to fetch dates');
  const data = await res.json();
  return data.dates || [];
}

export async function fetchStories(date: string): Promise<Record<Category, Story[]>> {
  const res = await fetch(`${API}/api/stories?date=${date}`, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error('Failed to fetch stories');
  const data = await res.json();
  return data.grouped || {};
}
