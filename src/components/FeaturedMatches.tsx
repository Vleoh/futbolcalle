import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardImage, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Section } from './ui/Section';
import { Container } from './ui/Container';
import { Badge } from './ui/Badge';

interface Match {
  id: number;
  title: string;
  date: string;
  location: string;
  teams: string;
  image: string;
  status: 'live' | 'upcoming' | 'finished';
}

const matches: Match[] = [
  {
    id: 1,
    title: "Final Regional Norte",
    date: "2024-03-25",
    location: "Cancha La Bombonera",
    teams: "Streamer Stars vs. Street Kings",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80",
    status: 'live'
  },
  {
    id: 2,
    title: "Semifinal Copa Influencers",
    date: "2024-03-28",
    location: "Campo Central",
    teams: "Team Flash vs. Urban Legends",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80",
    status: 'upcoming'
  }
];

function MatchInfo({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center space-x-2 text-gray-300">
      <Icon className="h-5 w-5" />
      <span>{text}</span>
    </div>
  );
}

function MatchStatus({ status }: { status: Match['status'] }) {
  const statusConfig = {
    live: { text: 'En Vivo', variant: 'success' as const },
    upcoming: { text: 'Próximo', variant: 'info' as const },
    finished: { text: 'Finalizado', variant: 'warning' as const }
  };

  const config = statusConfig[status];
  
  return (
    <div className="absolute top-4 right-4">
      <Badge variant={config.variant}>{config.text}</Badge>
    </div>
  );
}

export function FeaturedMatches() {
  return (
    <Section className="bg-gray-900">
      <Container>
        <h2 className="text-3xl font-bold text-white mb-8">Partidos Destacados</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {matches.map((match) => (
            <Card key={match.id}>
              <CardImage src={match.image} alt={match.title}>
                <MatchStatus status={match.status} />
              </CardImage>
              <CardContent>
                <h3 className="text-xl font-bold text-white mb-3">{match.title}</h3>
                <div className="space-y-2">
                  <MatchInfo icon={Calendar} text={match.date} />
                  <MatchInfo icon={MapPin} text={match.location} />
                  <MatchInfo icon={Users} text={match.teams} />
                </div>
                <Button variant="secondary" className="mt-4 w-full">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}