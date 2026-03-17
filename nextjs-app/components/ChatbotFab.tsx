'use client';

import { useState } from 'react';

export default function ChatbotFab() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="chatbot-fab"
        aria-label="Open ACI Assist"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        )}
      </button>

      {open && (
        <div className="chatbot-panel open">
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="chatbot-avatar">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>
              </div>
              <div>
                <h6>ACI Assist</h6>
                <p><span className="chatbot-status-dot" /> Here for You 24/7</p>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div className="chatbot-body">
            <div className="chatbot-messages">
              <div className="chatbot-bubble">
                <p>Hi, I&apos;m ACI Assist, your personal support for all medical needs. How can I help you?</p>
              </div>
            </div>
            <div className="chatbot-options">
              <button className="chatbot-opt">Help me find a doctor</button>
              <button className="chatbot-opt">I want to book appointment</button>
              <button className="chatbot-opt">I want to book health check</button>
              <button className="chatbot-opt">I have an emergency</button>
            </div>
          </div>

          <div className="chatbot-input-bar">
            <button className="chatbot-input-plus" aria-label="Attach">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
            <input type="text" placeholder="Message ACI Assist..." className="chatbot-input" readOnly />
            <button className="chatbot-input-mic" aria-label="Voice input">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="1" width="6" height="11" rx="3"/><path d="M19 10v2a7 7 0 01-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
