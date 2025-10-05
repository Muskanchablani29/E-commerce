from rest_framework import serializers
from .models import Category, Product, ProductImage
from vendors.serializers import VendorSerializer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'description', 'image', 'is_active']

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'alt_text', 'is_primary']

class ProductSerializer(serializers.ModelSerializer):
    vendor = VendorSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    discount_percentage = serializers.ReadOnlyField()

    class Meta:
        model = Product
        fields = [
            'id', 'vendor', 'category', 'name', 'slug', 'description',
            'short_description', 'price', 'compare_price', 'sku',
            'stock_quantity', 'stock_status', 'weight', 'dimensions',
            'is_featured', 'is_active', 'rating', 'review_count',
            'discount_percentage', 'images', 'created_at'
        ]

class ProductCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'vendor', 'category', 'name', 'slug', 'description',
            'short_description', 'price', 'compare_price', 'sku',
            'stock_quantity', 'stock_status', 'weight', 'dimensions',
            'is_featured'
        ]