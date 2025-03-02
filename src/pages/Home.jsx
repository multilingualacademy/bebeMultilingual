import React from 'react';
import { Link } from 'react-router-dom';

const dvdTitles = [
  'DVD 1 Español - Inglés',
  'DVD 2 Inglés - Español',
  'DVD 3 Italiano - Alemán',
  'DVD 4 Alemán - Italiano',
  'DVD 5 Francés - Portugués',
  'DVD 6 Portugués - Francés',
  'DVD 7 Mandarín - Todos',
  'DVD 8 Mandarín - Todos',
  'DVD 9 Palabras - Todos',
  'DVD 10 Palabras - Todos',
];

function Home() {
  return (
    <div className="home-container">
      <h1>Bebé Políglota</h1>
      <ul className="dvd-list">
        {dvdTitles.map((title, index) => (
          <li key={index} className="dvd-item">
            <Link to={`/dvd/${index + 1}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
