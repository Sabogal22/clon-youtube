import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Comment } from "../types/comment";
import type { VideoUI } from "../types/video";
import { formatearTiempo } from "../utils/time";
import "../assets/Watch.css";

function Watch() {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<VideoUI | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://127.0.0.1:8000/api/videos/${id}/`)
      .then((res) => {
        setVideo(res.data);
      })
      .catch(() => {
        console.error("Error cargando video");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const fetchComments = async () => {
      try {
        const response = await axios.get<Comment[]>(
          `http://127.0.0.1:8000/api/videos/${id}/comments/`,
        );
        setComments(response.data);
      } catch (error) {
        console.log("Error cargando comentarios", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [id]);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://127.0.0.1:8000/api/videos/${id}/likes/`)
      .then((res) => setLikes(res.data.likes));
  }, [id]);

  const handleLike = async () => {
    const res = await axios.post(
      `http://127.0.0.1:8000/api/videos/${id}/like/`,
      { user: "anon" },
    );
    setLiked(res.data.liked);
    setLikes((prev) => (res.data.liked ? prev + 1 : prev - 1));
  };

  if (loading) return <div className="watch-loading">Cargando video...</div>;
  if (!video) return <div className="watch-error">No se encontró el video</div>;

  return (
    <div className="watch-container">
      <main className="main-content smooth-transition">
        <div className="video-player-section">
          <div className="video-wrapper">
            <video
              src={video.video}
              controls
              autoPlay
              className="main-video-player"
            />
          </div>

          <div className="video-info-card">
            <h1 className="video-title">{video.titulo}</h1>

            <div className="video-actions-bar">
              <div className="video-stats">
                <span className="views-count">
                  <i className="fas fa-eye"></i> {video.vistas} vistas
                </span>
                <span className="upload-date">
                  {formatearTiempo(video.created_at)}
                </span>
              </div>

              <div className="action-buttons">
                <button
                  onClick={handleLike}
                  className={`like-button ${liked ? "liked" : ""}`}
                >
                  <i
                    className={`fas fa-thumbs-up ${liked ? "liked-icon" : ""}`}
                  ></i>
                  <span>{likes}</span>
                </button>

                <button className="action-button">
                  <i className="fas fa-share"></i>
                  <span>Compartir</span>
                </button>
              </div>
            </div>

            <div className="video-description-card">
              <div className="channel-info">
                <div className="channel-avatar">C</div>
                <div className="channel-details">
                  <h3 className="channel-name">Canal del Video</h3>
                  <p className="subscriber-count">1M suscriptores</p>
                </div>
                <button className="subscribe-btn">Suscribirse</button>
              </div>

              <div className="description-text">
                <p>{video.descripcion}</p>
              </div>
            </div>
          </div>

          <section className="comments-section">
            <div className="comments-header">
              <h3>
                <i className="fas fa-comments"></i>
                Comentarios ({comments.length})
              </h3>
            </div>

            <div className="comment-input-area">
              <div className="user-avatar-small">U</div>
              <input
                type="text"
                placeholder="Añade un comentario público..."
                className="comment-input"
              />
            </div>

            <div className="comments-list">
              {loading && (
                <p className="loading-comments">Cargando comentarios...</p>
              )}

              {!loading && comments.length === 0 && (
                <div className="no-comments">
                  <i className="far fa-comment-dots"></i>
                  <p>Sé el primero en comentar</p>
                </div>
              )}

              {comments.map((comment) => (
                <div className="comment-card" key={comment.id}>
                  <div className="comment-avatar">U</div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-author">Usuario</span>
                      <span className="comment-date">
                        {new Date(comment.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="comment-text">{comment.contenido}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Watch;
