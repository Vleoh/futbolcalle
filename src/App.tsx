import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedMatches } from './components/FeaturedMatches';
import { PlayerCardsSection } from './components/PlayerCards/PlayerCardsSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Hero />
        <FeaturedMatches />
        <PlayerCardsSection />
      </main>
    </div>
  );
}

export default App;