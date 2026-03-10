'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const sitePages = [
  { title: 'Breast Cancer', url: '/cancer/breast-cancer', category: 'Cancer Types' },
  { title: 'Cervical Cancer', url: '/cancer/cervical-cancer', category: 'Cancer Types' },
  { title: 'Lung Cancer', url: '/cancer/lung-cancer', category: 'Cancer Types' },
  { title: 'Colorectal Cancer', url: '/cancer/colorectal-cancer', category: 'Cancer Types' },
  { title: 'Blood Cancer', url: '/cancer/blood-cancer', category: 'Cancer Types' },
  { title: 'Head & Neck Cancer', url: '/cancer/head-neck-cancer', category: 'Cancer Types' },
  { title: 'Prostate Cancer', url: '/cancer/prostate-cancer', category: 'Cancer Types' },
  { title: 'Thyroid Cancer', url: '/cancer/thyroid-cancer', category: 'Cancer Types' },
  { title: 'Surgical Oncology', url: '/departments/surgical-oncology', category: 'Departments' },
  { title: 'Medical Oncology', url: '/departments/medical-oncology', category: 'Departments' },
  { title: 'Radiation Oncology', url: '/departments/radiation-oncology', category: 'Departments' },
  { title: 'Paediatric Oncology', url: '/departments/paediatric-oncology', category: 'Departments' },
  { title: 'Haematology', url: '/departments/haematology', category: 'Departments' },
  { title: 'Gynaecological Oncology', url: '/departments/gynaecological-oncology', category: 'Departments' },
  { title: 'Blood Bank & Transfusion Medicine', url: '/blood-bank', category: 'Departments' },
  { title: 'Dr. S. Krishnamurthy', url: '/doctors/dr-krishnamurthy', category: 'Our Doctors' },
  { title: 'Dr. R. Swaminathan', url: '/doctors/dr-swaminathan', category: 'Our Doctors' },
  { title: 'Dr. P. Anbalagan', url: '/doctors/dr-anbalagan', category: 'Our Doctors' },
  { title: 'Dr. V. Shanta', url: '/doctors/dr-shanta', category: 'Our Doctors' },
  { title: 'Dr. M. Balasubramanian', url: '/doctors/dr-balasubramanian', category: 'Our Doctors' },
  { title: 'Dr. K. Vijayalakshmi', url: '/doctors/dr-vijayalakshmi', category: 'Our Doctors' },
  { title: 'About Us', url: '/#about', category: 'Quick Links' },
  { title: 'Research & Education', url: 'https://ci-wia-research-pages.vercel.app/research', category: 'Quick Links' },
  { title: 'Events & Camps', url: '/#events', category: 'Quick Links' },
  { title: 'FAQs', url: '/#faq', category: 'Quick Links' },
  { title: 'Contact Us', url: '/#contact', category: 'Quick Links' },
  { title: 'Donate', url: '/#donate', category: 'Quick Links' },
  { title: 'Blood Bank', url: '/blood-bank', category: 'Quick Links' },
];

const categoryOrder = ['Cancer Types', 'Departments', 'Our Doctors', 'Quick Links'];

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClose = () => {
    setQuery('');
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setQuery('');
        onClose();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();
  const filtered = q ? sitePages.filter(p => p.title.toLowerCase().includes(q)) : sitePages;
  const grouped: Record<string, typeof sitePages> = {};
  filtered.forEach(p => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
  });

  return (
    <div className="search-overlay open" role="dialog" aria-modal="true" aria-label="Search the website" onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <button className="search-close" aria-label="Close search" onClick={handleClose}>&times;</button>
      <div className="search-sitemap-wrap">
        <div className="search-box">
          <div className="search-input-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input
              ref={inputRef}
              className="search-input"
              type="search"
              placeholder="Search for cancer types, doctors, services..."
              aria-label="Search query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <p className="search-hint">Type to filter pages or browse the sitemap below</p>
        </div>
        <div className="sitemap-grid">
          {categoryOrder.map(cat => {
            if (!grouped[cat]) return null;
            return (
              <div className="sitemap-category" key={cat}>
                <h6 className="sitemap-category-title">{cat}</h6>
                <div className="sitemap-items">
                  {grouped[cat].map(p => (
                    <Link key={p.url} className="sitemap-item" href={p.url} onClick={handleClose}>{p.title}</Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <p className="search-no-results">No results found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
}
