import React from "react";
import { Link } from "react-router-dom";
import { videoData } from "../data/videoData";
import Flag from "react-world-flags"; // Importar la librería para las banderas

const HomePage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Bebé Políglota</h1>
      <ul className="list-group">
        {videoData.map((dvd) => (
          <li
            key={dvd.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              {/* Mostrar la primera bandera */}
              <Flag
                code={dvd.primaryFlagCode}
                style={{ width: "30px", height: "20px", marginRight: "10px" }}
              />
              {/* Mostrar la segunda bandera */}
              <Flag
                code={dvd.secondaryFlagCode}
                style={{ width: "30px", height: "20px", marginRight: "10px" }}
              />
              <Link to={`/dvd/${dvd.id}`} className="text-decoration-none text-dark">
                {dvd.title}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
