import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ecommerce_api.settings')
django.setup()

from django.contrib.auth.models import User
from vendors.models import Vendor
from products.models import Category, Product

# Create sample categories
categories_data = [
    {'name': 'Electronics', 'slug': 'electronics', 'description': 'Electronic devices and gadgets'},
    {'name': 'Fashion', 'slug': 'fashion', 'description': 'Clothing and accessories'},
    {'name': 'Home & Garden', 'slug': 'home-garden', 'description': 'Home improvement and garden supplies'},
    {'name': 'Sports', 'slug': 'sports', 'description': 'Sports and fitness equipment'},
    {'name': 'Books', 'slug': 'books', 'description': 'Books and educational materials'},
]

for cat_data in categories_data:
    category, created = Category.objects.get_or_create(
        slug=cat_data['slug'],
        defaults=cat_data
    )
    if created:
        print(f"Created category: {category.name}")

# Create sample users and vendors
users_data = [
    {'username': 'techstore', 'email': 'tech@store.com', 'company': 'Tech Store Inc.'},
    {'username': 'fashionhub', 'email': 'fashion@hub.com', 'company': 'Fashion Hub Ltd.'},
    {'username': 'homegoods', 'email': 'home@goods.com', 'company': 'Home Goods Co.'},
]

for user_data in users_data:
    user, created = User.objects.get_or_create(
        username=user_data['username'],
        defaults={'email': user_data['email'], 'password': 'password123'}
    )
    
    if created:
        vendor = Vendor.objects.create(
            user=user,
            company_name=user_data['company'],
            description=f"Premium {user_data['company']} offering quality products",
            phone='+1-555-0123',
            email=user_data['email'],
            address='123 Business St',
            city='New York',
            state='NY',
            country='USA',
            postal_code='10001',
            is_verified=True,
            rating=4.5
        )
        print(f"Created vendor: {vendor.company_name}")

# Create sample products
electronics = Category.objects.get(slug='electronics')
fashion = Category.objects.get(slug='fashion')
tech_vendor = Vendor.objects.get(company_name='Tech Store Inc.')
fashion_vendor = Vendor.objects.get(company_name='Fashion Hub Ltd.')

products_data = [
    {
        'vendor': tech_vendor,
        'category': electronics,
        'name': 'Premium Wireless Headphones',
        'slug': 'premium-wireless-headphones',
        'description': 'High-quality wireless headphones with noise cancellation',
        'short_description': 'Premium wireless headphones with superior sound quality',
        'price': 299.99,
        'compare_price': 399.99,
        'sku': 'TWH-001',
        'stock_quantity': 50,
        'is_featured': True,
        'rating': 4.8
    },
    {
        'vendor': tech_vendor,
        'category': electronics,
        'name': 'Smart Watch Pro',
        'slug': 'smart-watch-pro',
        'description': 'Advanced smartwatch with health monitoring features',
        'short_description': 'Feature-rich smartwatch for active lifestyle',
        'price': 199.99,
        'compare_price': 249.99,
        'sku': 'SWP-001',
        'stock_quantity': 30,
        'is_featured': True,
        'rating': 4.6
    },
    {
        'vendor': fashion_vendor,
        'category': fashion,
        'name': 'Designer T-Shirt',
        'slug': 'designer-t-shirt',
        'description': 'Premium cotton t-shirt with modern design',
        'short_description': 'Comfortable and stylish designer t-shirt',
        'price': 49.99,
        'compare_price': 69.99,
        'sku': 'DTS-001',
        'stock_quantity': 100,
        'is_featured': False,
        'rating': 4.3
    }
]

for product_data in products_data:
    product, created = Product.objects.get_or_create(
        sku=product_data['sku'],
        defaults=product_data
    )
    if created:
        print(f"Created product: {product.name}")

print("Sample data created successfully!")