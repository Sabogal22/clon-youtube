export interface VideoAPI {
  id: number;
  titulo: string;
  descripcion: string;
  video: string;
  vistas: number;
  likes: number;
  portada: string;
  created_at: string;
}

export interface VideoUI extends VideoAPI {
  canal: string;
  avatarCanal: string;
  tiempoPublicacion: string;
  duracion: string;
  esNuevo?: boolean;
  esPopular?: boolean;
}
