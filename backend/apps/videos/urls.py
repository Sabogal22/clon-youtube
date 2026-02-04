from django.urls import path
from .views import VideoListView, VideoDetailView, CommentListView, CommentCreateView, ToggleLikeView, LikeCountView

urlpatterns = [
    path('', VideoListView.as_view(), name='video-list'),
    path('<int:pk>/', VideoDetailView.as_view(), name='video-detail'),
    path('<int:video_id>/comments/', CommentListView.as_view(), name='comment-list'),
    path('<int:video_id>/comments/create/', CommentCreateView.as_view(), name='comment-create'),
    path('<int:video_id>/like/', ToggleLikeView.as_view()),
    path('<int:video_id>/likes/', LikeCountView.as_view()),
]
