import React, { useState } from 'react';
import { Search, Filter, Package } from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { PlayerCardsGrid } from './PlayerCardsGrid';
import { CardPack } from './CardPackOpening/CardPack';
import { CardReveal } from './CardPackOpening/CardReveal';
import { Button } from '../ui/Button';
import { type Player } from './types';
import { motion } from 'framer-motion';
const imgpath='https://library.sportingnews.com/2021-11/lionel-messi-otw-fifa-22_1xvjdobr0kphp1ia4f5cevrc81.png'
const MOCK_PLAYERS = [
  { id: 1, name: 'Lionel Messi', position: 'Forward', image: imgpath },
  { id: 2, name: 'Cristiano Ronaldo', position: 'Forward', image: imgpath },
  { id: 3, name: 'Neymar Jr.', position: 'Forward', image: imgpath },
  { id: 4, name: 'Kylian Mbappé', position: 'Forward', image: imgpath },
  { id: 5, name: 'Robert Lewandowski', position: 'Forward', image: imgpath }
];

export function PlayerCardsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpeningPack, setIsOpeningPack] = useState(false);
  const [revealedCard, setRevealedCard] = useState<Player | null>(null);
  const [showCard, setShowCard] = useState(false);

  const handleOpenPack = () => {
    console.log('Attempting to open pack...');
    setIsOpeningPack(true);
    setShowCard(false);
    setTimeout(() => {
      const randomCard = MOCK_PLAYERS[Math.floor(Math.random() * MOCK_PLAYERS.length)];
      console.log('Card revealed:', randomCard);
      setRevealedCard(randomCard);
      setShowCard(true);
    }, 1000); // Simulate card opening delay
  };

  const handleCancelOpenPack = () => {
    console.log('Pack opening canceled.');
    setIsOpeningPack(false);
    setShowCard(false);
  };

  const handleCloseReveal = () => {
    setIsOpeningPack(false);
    setRevealedCard(null);
    setShowCard(false);
  };

  return (
    <Section className="bg-gray-900">
      <Container>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Cartas Coleccionables</h2>
              <p className="text-gray-400">
                Colecciona cartas de tus jugadores favoritos y arma el mejor equipo de la liga
              </p>
            </div>
            <Button
              variant="primary"
              size="lg"
              className="flex items-center space-x-2"
              onClick={() => setIsOpeningPack(true)}
            >
              <Package className="w-5 h-5" />
              <span>Abrir Sobre</span>
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar jugadores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
            <button className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <Filter className="w-5 h-5 mr-2" />
              Filtrar
            </button>
          </div>
        </div>

        <PlayerCardsGrid 
          players={MOCK_PLAYERS.filter(player => 
            player.name.toLowerCase().includes(searchTerm.toLowerCase())
          )} 
        />

        {isOpeningPack && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <div className="bg-gray-900 p-4 rounded-lg">
              <CardPack onOpen={handleOpenPack} />
              <Button onClick={handleCancelOpenPack} className="mt-4">Cancelar</Button>
            </div>
          </div>
        )}

        {showCard && (
          <motion.div className="card-reveal-animation">
            <img src={revealedCard?.image} alt="Revealed Card" className="w-full h-auto" />
          </motion.div>
        )}
      </Container>
    </Section>
  );
}