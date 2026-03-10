'use client';

import { useState } from 'react';

export default function ChatbotFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="chatbot-fab"
        aria-label="Get help or ask a question"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      </button>

      {open && (
        <div className="chatbot-panel open">
          <div className="chatbot-header">
            <div>
              <h6>CI(WIA) Help Desk</h6>
              <p>How can we assist you today?</p>
            </div>
          </div>
          <div className="chatbot-body">
            <p>Select an option or type your question:</p>
            <div className="chatbot-options">
              <button className="chatbot-opt">&#x1F4C5; Book an Appointment</button>
              <button className="chatbot-opt">&#x1F50E; Find a Specialist</button>
              <button className="chatbot-opt">&#x1F4B3; Insurance &amp; Schemes</button>
              <button className="chatbot-opt">&#x1F4CD; Get Directions</button>
            </div>
            <a href="tel:+914424910754" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '13px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.23 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call Us Directly
            </a>
          </div>
        </div>
      )}
    </>
  );
}
