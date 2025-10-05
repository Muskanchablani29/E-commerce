from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('', views.ProductListCreateView.as_view(), name='product-list-create'),
    path('<int:pk>/', views.ProductDetailView.as_view(), name='product-detail'),
    path('featured/', views.FeaturedProductsView.as_view(), name='featured-products'),
]