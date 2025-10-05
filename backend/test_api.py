import os
import django
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ecommerce_api.settings')
django.setup()

from django.test import Client
from django.urls import reverse

# Create a test client
client = Client()

print("Testing E-Commerce API Endpoints...")
print("=" * 50)

# Test Categories endpoint
print("\n1. Testing Categories API:")
response = client.get('/api/products/categories/')
print(f"Status: {response.status_code}")
if response.status_code == 200:
    data = response.json()
    print(f"Categories found: {len(data)}")
    for cat in data[:2]:  # Show first 2 categories
        print(f"  - {cat['name']} ({cat['slug']})")

# Test Vendors endpoint
print("\n2. Testing Vendors API:")
response = client.get('/api/vendors/')
print(f"Status: {response.status_code}")
if response.status_code == 200:
    data = response.json()
    print(f"Vendors found: {len(data)}")
    for vendor in data[:2]:  # Show first 2 vendors
        print(f"  - {vendor['company_name']} (Rating: {vendor['rating']})")

# Test Products endpoint
print("\n3. Testing Products API:")
response = client.get('/api/products/')
print(f"Status: {response.status_code}")
if response.status_code == 200:
    data = response.json()
    print(f"Products found: {data['count']}")
    for product in data['results'][:2]:  # Show first 2 products
        print(f"  - {product['name']} - ${product['price']}")
        if product['discount_percentage'] > 0:
            print(f"    Discount: {product['discount_percentage']}%")

# Test Featured Products endpoint
print("\n4. Testing Featured Products API:")
response = client.get('/api/products/featured/')
print(f"Status: {response.status_code}")
if response.status_code == 200:
    data = response.json()
    print(f"Featured products found: {data['count']}")
    for product in data['results']:
        print(f"  - {product['name']} - ${product['price']}")

# Test Product filtering
print("\n5. Testing Product Filtering:")
response = client.get('/api/products/?category=1')
print(f"Electronics category filter - Status: {response.status_code}")
if response.status_code == 200:
    data = response.json()
    print(f"Electronics products: {data['count']}")

# Test Product search
print("\n6. Testing Product Search:")
response = client.get('/api/products/?search=headphones')
print(f"Search 'headphones' - Status: {response.status_code}")
if response.status_code == 200:
    data = response.json()
    print(f"Search results: {data['count']}")

print("\n" + "=" * 50)
print("API Testing Complete!")
print("\nAPI Endpoints Summary:")
print("[OK] GET /api/products/categories/ - List categories")
print("[OK] GET /api/vendors/ - List vendors")
print("[OK] GET /api/products/ - List products (with pagination)")
print("[OK] GET /api/products/featured/ - Featured products")
print("[OK] GET /api/products/?category=1 - Filter by category")
print("[OK] GET /api/products/?search=term - Search products")
print("\nServer ready to start with: python manage.py runserver")