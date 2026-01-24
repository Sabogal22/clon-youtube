from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, CreateAPIView
from .models import Video, Comment, Like
from .serializers import VideoSerializer, CommentSerializer
from typing import Any


""" Lista de Videos """
class VideoListView(generics.ListAPIView):
  queryset = Video.objects.all().order_by('-created_at')
  serializer_class = VideoSerializer

""" Video Detallado """
class VideoDetailView(generics.RetrieveAPIView):
  queryset = Video.objects.all()
  serializer_class = VideoSerializer

""" Vista de Todos los Comentarios """
class CommentListView(ListAPIView):
  serializer_class = CommentSerializer

  def get_queryset(self) -> Any:
    video_id = self.kwargs["video_id"]
    return Comment.objects.filter(
      video_id=video_id
    ).order_by("-created_at")

  
""" Para crear el Comentario """
class CommentCreateView(CreateAPIView):
  serializer_class = CommentSerializer

  def perform_create(self, serializer):
    video_id = self.kwargs["video_id"]
    serializer.save(video_id=video_id)

""" Para dar o quitar el like """
class ToggleLikeView(APIView):
  def post(self, request, video_id):
    user = request.data.get("user", "anon")
    like, created = Like.objects.get_or_create(
      video_id=video_id,
      user=user
    )
    if not created:
      like.delete()
      return Response({"liked": False})
    return Response({"liked": True})
  
""" Para contar los like """
class LikeCountView(APIView):
  def get(self, request, video_id):
    count = Like.objects.filter(video_id=video_id).count()
    return Response({"likes": count})