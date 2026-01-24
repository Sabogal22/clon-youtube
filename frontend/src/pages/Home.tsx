import { useState, useEffect } from "react";
import "../App.css";
import VideoList from "../components/VideoList";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("todos");

  // Simular carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filters = [
    { id: "todos", label: "Todos" },
    { id: "tendencias", label: "Tendencias" },
    { id: "musica", label: "Música" },
    { id: "videojuegos", label: "Videojuegos" },
    { id: "deportes", label: "Deportes" },
    { id: "aprendizaje", label: "Aprendizaje" },
    { id: "nuevos", label: "Recientes" },
  ];

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
  };

  return (
    <div className="app-container">
      <main className="main-content smooth-transition">
        {/* Filtros y controles */}
        <div className="filters-container">
          <div className="filters-left">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`filter-button smooth-transition ${
                  activeFilter === filter.id ? "active" : ""
                }`}
                onClick={() => handleFilterClick(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="filters-right">
            <select className="sort-select">
              <option value="recientes">Más recientes</option>
              <option value="populares">Más populares</option>
              <option value="vistos">Más vistos</option>
            </select>

            <button className="filter-button">
              <i className="fas fa-sliders-h"></i>
              Filtros
            </button>
          </div>
        </div>

        {/* Contenido de videos */}
        {isLoading ? (
          <div className="videos-loading">
            <div className="loading-spinner"></div>
            <p>Cargando videos recomendados...</p>
          </div>
        ) : (
          <div className="videos-grid">
            <VideoList />
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
