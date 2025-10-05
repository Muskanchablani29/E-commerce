from rest_framework import generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer, ProductCreateSerializer

class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.filter(is_active=True)
    serializer_class = CategorySerializer

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.filter(is_active=True)
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category', 'vendor', 'is_featured', 'stock_status']
    search_fields = ['name', 'description', 'sku']
    ordering_fields = ['price', 'created_at', 'rating']
    ordering = ['-created_at']

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return ProductCreateSerializer
        return ProductSerializer

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.filter(is_active=True)
    serializer_class = ProductSerializer

class FeaturedProductsView(generics.ListAPIView):
    queryset = Product.objects.filter(is_featured=True, is_active=True)
    serializer_class = ProductSerializer