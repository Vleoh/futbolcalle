import React from 'react';
import { Menu, Trophy, Calendar, Layout, Users, Award } from 'lucide-react';
import { NavLink } from './ui/NavLink';
import { Button } from './ui/Button';
import { Container } from './ui/Container';

export function Header() {
  return (
    <header className="bg-black text-white shadow-lg">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Menu className="h-6 w-6 text-green-400" />
            <span className="text-2xl font-bold">FÚTBOL CALLE</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink icon={Trophy} text="Liga" />
            <NavLink icon={Calendar} text="Eventos" />
            <NavLink icon={Layout} text="Cartas" />
            <NavLink icon={Users} text="Mi Equipo" />
            <NavLink icon={Award} text="Logros" />
          </nav>
          
          <Button variant="primary" size="md">
            Iniciar Sesión
          </Button>
        </div>
      </Container>
    </header>
  );
}