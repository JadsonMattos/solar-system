import React from 'react';

interface PlanetCardProps {
  planetName: string,
  planetImage: string,
}

function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  return (
    <div data-testid="planet-card" className="planet-card">
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      <p data-testid="planet-name">{planetName}</p>
    </div>
  );
}

export default PlanetCard;
