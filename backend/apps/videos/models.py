from django.db import models

class Video(models.Model):
  class StatusChoices(models.TextChoices):
    DISPONIBLE = 'Disponible', 'Disponible'
    PRIVADO = 'Privado', 'Privado'
    SUSCRIPTORES = 'Suscriptores', 'Suscriptores'

  titulo = models.CharField(max_length=255)
  descripcion = models.TextField(blank=True)
  video = models.FileField(upload_to='Videos/')
  created_at = models.DateTimeField(auto_now_add=True)
  vistas = models.PositiveIntegerField(default=0)
  portada = models.ImageField(upload_to='Videos/Portadas/')
  estado = models.CharField(
    max_length=20,
    choices=StatusChoices.choices,
    default=StatusChoices.DISPONIBLE
  )

  def __str__(self):
    return self.titulo
  
class Comment(models.Model):
  video = models.ForeignKey(
    Video,
    related_name="comentarios",
    on_delete=models.CASCADE
  )
  contenido = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.contenido[:30]
  
class Like(models.Model):
  video = models.ForeignKey(
    Video,
    on_delete=models.CASCADE,
    related_name="likes"
  )
  user = models.CharField(max_length=100)
  created_at = models.DateTimeField(auto_now_add=True)

  class Meta:
    unique_together = ("video", "user")