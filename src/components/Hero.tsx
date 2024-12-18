import React from 'react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80"
          alt="Fútbol Calle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-4">
            La Nueva Era del Fútbol Amateur
          </h1>
          <p className="text-xl mb-8">
            Únete a la comunidad más grande de fútbol callejero. Compite, colecciona y conviértete en leyenda.
          </p>
          <div className="flex space-x-4">
            <Button variant="primary" size="lg">
              Explora la Liga
            </Button>
            <Button variant="secondary" size="lg">
              Ver Eventos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}