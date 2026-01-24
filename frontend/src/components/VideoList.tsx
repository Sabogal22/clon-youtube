import { Component } from "react";
import axios from "axios";
import VideoCard from "./VideoCard";
import type { VideoAPI, VideoUI } from "../types/video";

interface State {
  videos: VideoUI[];
  loading: boolean;
  error: string | null;
}

class VideoList extends Component<{}, State> {
  state: State = {
    videos: [],
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await axios.get<VideoAPI[]>(
        "http://127.0.0.1:8000/api/videos/"
      );

      // 🔥 ADAPTADOR backend → UI
      const videosUI: VideoUI[] = response.data.map((video) => ({
        ...video,
        canal: "Mi Canal",
        avatarCanal: "",
        tiempoPublicacion: "hace 2 horas",
        duracion: "12:34",
        esNuevo: true,
        esPopular: video.vistas > 100,
      }));

      this.setState({ videos: videosUI });
    } catch {
      this.setState({ error: "Error al cargar videos" });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { videos, loading, error } = this.state;

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
      <div className="row">
        {videos.map((video) => (
          <div className="col-md-6 mb-3" key={video.id}>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    );
  }
}

export default VideoList;
