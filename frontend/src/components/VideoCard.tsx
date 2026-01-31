import { Component } from "react";
import "../assets/VideoCard.css";
import type { VideoUI } from "../types/video";
import { Link } from "react-router-dom";
import {formatearTiempo} from "../utils/time";

interface VideoCardProps {
  video: VideoUI;
}

class VideoCard extends Component<VideoCardProps> {
  render() {
    const { video } = this.props;

    return (
      <div className="youtube-video-card acadebeir">
        {/* Contenedor de la miniatura */}
        <div className="video-thumbnail-container">
          {/* Imagen/Video de miniatura */}
          <div className="video-thumbnail">
            <img
              src={video.portada}
              alt={video.titulo}
              className="thumbnail-image"
            />

            {/* Badge de duración */}
            <span className="video-duration">{video.duracion}</span>

            {/* Badge de nuevo o popular */}
            {video.esNuevo && (
              <span className="video-badge video-badge-new">NUEVO</span>
            )}
            {video.esPopular && (
              <span className="video-badge video-badge-popular">
                <i className="fas fa-fire"></i> POPULAR
              </span>
            )}

            {/* Overlay de hover */}
            <div className="thumbnail-overlay">
              <Link to={`/watch/${video.id}`} className="clean-link">
                <button className="play-button">
                  <i className="fas fa-play"></i>
                </button>
              </Link>
              <div className="thumbnail-actions">
                <button className="action-button" title="Ver más tarde">
                  <i className="far fa-clock"></i>
                </button>
                <button className="action-button" title="Agregar a la lista">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Información del video */}

        <div className="video-info">
          {/* Avatar del canal */}
          <div className="channel-avatar-small">
            {video.avatarCanal ? (
              <img
                src={video.avatarCanal}
                alt={video.canal}
                className="avatar-image"
              />
            ) : (
              <div className="avatar-initial">
                {video.canal.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          {/* Detalles del video */}
          <div className="video-details">
            {/* Título */}
            <h3 className="video-title" title={video.titulo}>
              {video.titulo}
            </h3>

            {/* Nombre del canal */}
            <div className="video-channel">
              <a href="#" className="channel-link">
                {video.canal}
              </a>
              <button className="verified-badge" title="Canal verificado">
                <i className="fas fa-check-circle"></i>
              </button>
            </div>

            {/* Estadísticas */}
            <div className="video-stats">
              <span className="video-views">{video.vistas} vistas</span>
              <span className="video-time">
                {formatearTiempo(video.created_at)}
              </span>
            </div>

            {/* Descripción (solo visible en hover) */}
            <div className="video-description">{video.descripcion}</div>
          </div>

          {/* Menú de opciones (tres puntos) */}
          <button className="video-options">
            <i className="fas fa-ellipsis-v"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default VideoCard;
