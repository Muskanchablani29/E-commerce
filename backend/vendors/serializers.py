from rest_framework import serializers
from .models import Vendor

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = [
            'id', 'company_name', 'description', 'phone', 'email',
            'address', 'city', 'state', 'country', 'postal_code',
            'website', 'logo', 'is_verified', 'rating', 'created_at'
        ]
        read_only_fields = ['id', 'created_at', 'is_verified', 'rating']