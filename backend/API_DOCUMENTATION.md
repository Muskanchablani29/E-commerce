# E-Commerce API Documentation

## Base URL
```
http://localhost:8000/api/
```

## Endpoints

### Vendors
- **GET** `/vendors/` - List all vendors
- **POST** `/vendors/` - Create new vendor
- **GET** `/vendors/{id}/` - Get vendor details
- **PUT** `/vendors/{id}/` - Update vendor
- **DELETE** `/vendors/{id}/` - Delete vendor

### Products
- **GET** `/products/` - List all products (with filtering)
- **POST** `/products/` - Create new product
- **GET** `/products/{id}/` - Get product details
- **PUT** `/products/{id}/` - Update product
- **DELETE** `/products/{id}/` - Delete product
- **GET** `/products/featured/` - Get featured products

### Categories
- **GET** `/products/categories/` - List all categories
- **POST** `/products/categories/` - Create new category

## Query Parameters for Products

### Filtering
- `category` - Filter by category ID
- `vendor` - Filter by vendor ID
- `is_featured` - Filter featured products (true/false)
- `stock_status` - Filter by stock status (in_stock, out_of_stock, limited)

### Search
- `search` - Search in product name, description, or SKU

### Ordering
- `ordering` - Order by price, created_at, rating (use - for descending)

### Examples
```
GET /api/products/?category=1&is_featured=true
GET /api/products/?search=headphones&ordering=-price
GET /api/products/?vendor=1&stock_status=in_stock
```

## Sample Responses

### Product List Response
```json
{
  "count": 3,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 1,
      "vendor": {
        "id": 1,
        "company_name": "Tech Store Inc.",
        "email": "tech@store.com",
        "rating": "4.50"
      },
      "category": {
        "id": 1,
        "name": "Electronics",
        "slug": "electronics"
      },
      "name": "Premium Wireless Headphones",
      "slug": "premium-wireless-headphones",
      "price": "299.99",
      "compare_price": "399.99",
      "discount_percentage": 25.06,
      "stock_quantity": 50,
      "stock_status": "in_stock",
      "is_featured": true,
      "rating": "4.80",
      "images": []
    }
  ]
}
```

### Vendor Response
```json
{
  "id": 1,
  "company_name": "Tech Store Inc.",
  "description": "Premium Tech Store Inc. offering quality products",
  "phone": "+1-555-0123",
  "email": "tech@store.com",
  "address": "123 Business St",
  "city": "New York",
  "state": "NY",
  "country": "USA",
  "postal_code": "10001",
  "website": "",
  "logo": null,
  "is_verified": true,
  "rating": "4.50",
  "created_at": "2024-01-01T00:00:00Z"
}
```

## Running the Server
```bash
cd backend
python manage.py runserver
```

The API will be available at `http://localhost:8000/api/`