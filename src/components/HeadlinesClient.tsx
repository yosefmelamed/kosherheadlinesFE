'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  CATEGORIES,
  Category,
  Story,
  DateEntry,
  fetchStories,
  fmtDateLabel,
  fmtFullDate,
} from '@/lib/types';
import MarketsBanner from './MarketsBanner';
import styles from './HeadlinesClient.module.css';

export default function HeadlinesClient({ dates }: { dates: DateEntry[] }) {
  const [selDate, setSelDate] = useState(dates[0]?.fetch_date || '');
  const [selCat, setSelCat] = useState<Category>('trending');
  const [grouped, setGrouped] = useState<Record<string, Story[]>>({});
  const [loading, setLoading] = useState(true);

  const load = useCallback(async (date: string) => {
    setLoading(true);
    try {
      const g = await fetchStories(date);
      setGrouped(g);
      const available = CATEGORIES.filter((c) => (g[c.id] || []).length > 0).map((c) => c.id);
      setSelCat((prev) => (available.includes(prev) ? prev : available[0] || 'trending'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selDate) load(selDate);
  }, [selDate, load]);

  const stories: Story[] = grouped[selCat] || [];
  const catColor = `var(--c-${selCat})`;
  const catLabel = CATEGORIES.find((c) => c.id === selCat)?.label || '';

  return (
    <div className={styles.wrap}>
      {/* Day nav */}
      <nav className={styles.dayNav}>
        {dates.map(({ fetch_date }) => (
          <button
            key={fetch_date}
            className={`${styles.dayBtn} ${fetch_date === selDate ? styles.dayBtnActive : ''}`}
            onClick={() => setSelDate(fetch_date)}
          >
            {fmtDateLabel(fetch_date)}
          </button>
        ))}
      </nav>

      {/* Category nav */}
      <nav className={styles.catNav}>
        {CATEGORIES.map((cat) => {
          const count = (grouped[cat.id] || []).length;
          const isActive = cat.id === selCat;
          return (
            <button
              key={cat.id}
              className={`${styles.catBtn} ${isActive ? styles.catBtnActive : ''}`}
              style={
                isActive
                  ? ({ '--cat-color': `var(--c-${cat.id})` } as React.CSSProperties)
                  : {}
              }
              onClick={() => setSelCat(cat.id)}
              disabled={count === 0}
            >
              <span
                className={styles.catDot}
                style={{ background: `var(--c-${cat.id})` }}
              />
              {cat.label}
              {count > 0 && <span className={styles.catCount}>{count}</span>}
            </button>
          );
        })}
      </nav>

      {/* Feed */}
      <main className={styles.feed}>
        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner} />
          </div>
        ) : stories.length === 0 ? (
          <div className={styles.empty}>No {catLabel} stories for this day.</div>
        ) : (
          <>
            <div className={styles.feedHeader}>
              <span className={styles.feedCat} style={{ color: catColor }}>
                {catLabel}
              </span>
              <span className={styles.feedDate}>{fmtFullDate(selDate)}</span>
            </div>

            {/* Markets banner — only on Financial tab */}
            {selCat === 'financial' && <MarketsBanner />}

            <div className={styles.grid}>
              {stories.map((story, i) => (
                <StoryCard key={story.id} story={story} index={i} catColor={catColor} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function StoryCard({
  story,
  index,
  catColor,
}: {
  story: Story;
  index: number;
  catColor: string;
}) {
  return (
    <article
      className={`${styles.card} ${index === 0 ? styles.cardLead : ''}`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className={styles.cardSource} style={{ color: catColor }}>
        {story.source}
      </div>
      {story.url ? (
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardTitle}
        >
          {story.title}
        </a>
      ) : (
        <h2 className={styles.cardTitle}>{story.title}</h2>
      )}
      <p className={styles.cardSummary}>{story.summary}</p>
      {story.url && (
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardReadMore}
        >
          Read more
        </a>
      )}
    </article>
  );
}
