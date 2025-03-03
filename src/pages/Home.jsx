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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-200 mb-6">Bebé Políglota</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {dvdTitles.map((title, index) => (
          <Link
            key={index}
            to={`/dvd/${index + 1}`}
            className="bg-white shadow-lg rounded-lg p-6 text-lg text-gray-700 hover:bg-blue-100 transition duration-300 text-center flex items-center justify-center min-h-[100px]"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
