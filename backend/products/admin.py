from django.contrib import admin
from .models import Category, Product, ProductImage

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'description']
    prepopulated_fields = {'slug': ('name',)}

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'vendor', 'category', 'price', 'stock_quantity', 'is_featured', 'is_active']
    list_filter = ['category', 'vendor', 'is_featured', 'is_active', 'stock_status', 'created_at']
    search_fields = ['name', 'sku', 'description']
    prepopulated_fields = {'slug': ('name',)}
    inlines = [ProductImageInline]
    fieldsets = (
        ('Basic Information', {
            'fields': ('vendor', 'category', 'name', 'slug', 'description', 'short_description')
        }),
        ('Pricing', {
            'fields': ('price', 'compare_price', 'sku')
        }),
        ('Inventory', {
            'fields': ('stock_quantity', 'stock_status')
        }),
        ('Physical Properties', {
            'fields': ('weight', 'dimensions')
        }),
        ('Status & Features', {
            'fields': ('is_featured', 'is_active', 'rating', 'review_count')
        }),
    )