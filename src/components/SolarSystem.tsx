import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="PLANETAS" />
      <div className="planets-class">
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetImage={ planet.image }
            planetName={ planet.name }
          />
        ))}
      </div>
    </div>
  );
}

export default SolarSystem;
