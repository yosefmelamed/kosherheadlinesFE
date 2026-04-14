'use client';
 
import { useEffect, useState, useRef } from 'react';
import styles from './MarketsBanner.module.css';
 
interface Quote {
  symbol: string;
  name: string;
  group: string;
  price: number;
  change: number;
  changePct: number;
}
 
const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
 
function fmtPrice(price: number): string {
  if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 1) return price.toFixed(2);
  return price.toFixed(4);
}
 
function fmtPct(pct: number): string {
  return (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%';
}
 
export default function MarketsBanner() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatedAt, setUpdatedAt] = useState('');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(API + '/api/markets');
        if (!res.ok) return;
        const data = await res.json();
        setQuotes(data.quotes || []);
        setUpdatedAt(
          new Date(data.updatedAt).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
          })
        );
      } catch {}
      finally { setLoading(false); }
    }
    load();
    const iv = setInterval(load, 5 * 60 * 1000);
    return () => clearInterval(iv);
  }, []);
 
  function checkScroll() {
    const el = rowRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }
 
  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [quotes]);
 
  function scrollBy(dir: number) {
    rowRef.current?.scrollBy({ left: dir * 200, behavior: 'smooth' });
  }
 
  if (loading) {
    return (
      <div className={styles.banner}>
        <span className={styles.sectionLabel}>Markets</span>
        <span className={styles.placeholder}>Loading...</span>
      </div>
    );
  }
 
  if (!quotes.length) return null;
 
  return (
    <div className={styles.banner}>
      <span className={styles.sectionLabel}>Markets</span>
 
      {canScrollLeft && (
        <button className={styles.arrow} onClick={() => scrollBy(-1)} aria-label="Scroll left">
          &#8249;
        </button>
      )}
 
      <div className={styles.row} ref={rowRef}>
        {quotes.map((q) => (
          <div key={q.symbol} className={styles.quote}>
            <span className={styles.name}>{q.name}</span>
            <span className={styles.price}>{fmtPrice(q.price)}</span>
            <span className={`${styles.pct} ${q.change >= 0 ? styles.up : styles.down}`}>
              {fmtPct(q.changePct)}
            </span>
          </div>
        ))}
      </div>
 
      {canScrollRight && (
        <button className={styles.arrow} onClick={() => scrollBy(1)} aria-label="Scroll right">
          &#8250;
        </button>
      )}
 
      {updatedAt && <span className={styles.updated}>Live · {updatedAt}</span>}
    </div>
  );
}