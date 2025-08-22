import React from 'react';

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>TechFlow.io</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Documentation</a>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h2>Automate Your Development Workflow</h2>
          <p>AI-powered GitHub automation that actually works</p>
          <button>Get Started</button>
        </section>
        
        <section id="features">
          <h3>Features</h3>
          {/* TODO: Add feature cards */}
        </section>
      </main>
      
      <footer>
        <p>&copy; 2024 TechFlow.io</p>
      </footer>
    </div>
  );
}