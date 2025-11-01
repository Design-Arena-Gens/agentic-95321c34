'use client';

import { useState, useEffect } from 'react';
import './styles.css';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      title: "Unforgiving Combat",
      desc: "Every decision matters. Death is permanent. Choose your battles wisely.",
      icon: "⚔"
    },
    {
      title: "Corrupted World",
      desc: "Explore a dying realm where darkness seeps through every crack.",
      icon: "🕯"
    },
    {
      title: "Moral Decay",
      desc: "No heroes exist here. Only survivors willing to pay the price.",
      icon: "💀"
    },
    {
      title: "Eldritch Powers",
      desc: "Harness forbidden magic at the cost of your sanity and soul.",
      icon: "🌑"
    }
  ];

  return (
    <div className="container">
      <div
        className="cursor-glow"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      <div className="grain-overlay" />

      <nav className="nav">
        <div className="nav-brand">SHADOWBORNE</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#lore">Lore</a>
          <a href="#join">Join</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="glitch" data-text="SHADOWBORNE">SHADOWBORNE</span>
            <span className="subtitle">CHRONICLES</span>
          </h1>
          <p className="hero-tagline">
            In a world consumed by eternal night, hope is a dangerous illusion
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
              <span>ENTER THE DARKNESS</span>
            </button>
            <button className="btn btn-secondary">
              <span>WATCH TRAILER</span>
            </button>
          </div>
        </div>

        <div className="hero-ornament top-left" />
        <div className="hero-ornament top-right" />
        <div className="hero-ornament bottom-left" />
        <div className="hero-ornament bottom-right" />
      </section>

      <section id="features" className="features">
        <h2 className="section-title">
          <span className="title-line" />
          FACE YOUR FATE
          <span className="title-line" />
        </h2>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`feature-card ${activeSection === idx ? 'active' : ''}`}
              onMouseEnter={() => setActiveSection(idx)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
              <div className="feature-border" />
            </div>
          ))}
        </div>
      </section>

      <section id="lore" className="lore">
        <div className="lore-content">
          <div className="lore-text">
            <h2 className="lore-title">THE WORLD BLEEDS</h2>
            <p className="lore-paragraph">
              Three centuries ago, the Sundering tore reality asunder. The gods fell silent.
              The sun dimmed to a pale ember, casting the world into perpetual twilight.
            </p>
            <p className="lore-paragraph">
              From the wounds in the earth, the Blight emerged—a creeping corruption that
              twists flesh and warps minds. Kingdoms crumbled. Cities became tombs.
              Humanity clings to existence in fortified enclaves, surrounded by horrors.
            </p>
            <p className="lore-paragraph">
              You are Shadowborne—cursed with the ability to harness the very darkness
              that devours the world. Will you save what remains, or embrace the inevitable?
            </p>
          </div>
          <div className="lore-visual">
            <div className="lore-symbol">
              <div className="symbol-circle outer" />
              <div className="symbol-circle middle" />
              <div className="symbol-circle inner" />
              <div className="symbol-rune">†</div>
            </div>
          </div>
        </div>
      </section>

      <section id="join" className="cta">
        <div className="cta-box">
          <h2 className="cta-title">DESCEND INTO DARKNESS</h2>
          <p className="cta-text">
            Join the waitlist and be among the first to experience the descent
          </p>
          <form className="cta-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="cta-input"
            />
            <button type="submit" className="btn btn-cta">
              <span>CLAIM YOUR DESTINY</span>
            </button>
          </form>
          <p className="cta-footnote">
            Release: When the stars align • Platforms: PC, Console
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">SHADOWBORNE</div>
            <p className="footer-tagline">Chronicles of the Damned</p>
          </div>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Press Kit</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Shadowborne Chronicles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
