import React from "react";
import { Link } from "react-router-dom";
import { videoData } from "../data/videoData";
import Flag from "react-world-flags"; // Importar la librería para las banderas

const HomePage = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Bebé Políglota</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {videoData.map((dvd) => (
          <div key={dvd.id} className="col">
            <div className="card h-100 p-3 d-flex align-items-center text-center">
              <div className="d-flex justify-content-center mb-2">
                {/* Mostrar la primera bandera */}
                <Flag
                  code={dvd.primaryFlagCode}
                  style={{ width: "50px", height: "20px", marginRight: "10px" }}
                />
                {/* Mostrar la segunda bandera */}
                <Flag
                  code={dvd.secondaryFlagCode}
                  style={{ width: "50px", height: "20px", marginRight: "10px" }}
                />
              </div>
              <Link to={`/dvd/${dvd.id}`} className="text-decoration-none text-dark">
                {dvd.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;