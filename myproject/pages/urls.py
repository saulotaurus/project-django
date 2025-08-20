from django.urls import path
from .import views

urlpatterns = [
    # Quando a URL for vazia (ex: http://site.com/), chame a view 'home_page_view'
    path('', views.home_page_view, name='home'),

    # Se você também quiser que /home funcione, pode adicionar outra rota
    path('home/', views.home_page_view, name='home_alias'),
]