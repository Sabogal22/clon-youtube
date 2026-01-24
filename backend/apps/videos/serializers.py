from rest_framework import serializers
from .models import Video, Comment, Like

class VideoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Video
    fields = [
      'id',
      'titulo',
      'descripcion',
      'video',
      'estado',
      'vistas',
      'likes',
      'portada',
      'created_at',
    ]

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ["id", "contenido", "created_at"]

class LikeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Like
    fields = ["id", "created_at"]