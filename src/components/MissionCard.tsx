import React from 'react';

interface MissionCardProps {
  name: string,
  year: string,
  country: string,
  destination: string,
}

function MissionCard({ name, year, country, destination }: MissionCardProps) {
  return (
    <div data-testid="mission-card" className="mission-card">
      <p data-testid="mission-name" className="mission-name">{name}</p>
      <p data-testid="mission-year" className="mission-details">{year}</p>
      <p data-testid="mission-country" className="mission-details">{country}</p>
      <p data-testid="mission-destination" className="mission-details">{destination}</p>
    </div>
  );
}

export default MissionCard;
