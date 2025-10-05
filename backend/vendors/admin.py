from django.contrib import admin
from .models import Vendor

@admin.register(Vendor)
class VendorAdmin(admin.ModelAdmin):
    list_display = ['company_name', 'email', 'city', 'is_verified', 'rating', 'created_at']
    list_filter = ['is_verified', 'country', 'state', 'created_at']
    search_fields = ['company_name', 'email', 'phone']
    readonly_fields = ['created_at', 'updated_at']
    fieldsets = (
        ('Basic Information', {
            'fields': ('user', 'company_name', 'description', 'logo')
        }),
        ('Contact Information', {
            'fields': ('phone', 'email', 'website')
        }),
        ('Address', {
            'fields': ('address', 'city', 'state', 'country', 'postal_code')
        }),
        ('Status', {
            'fields': ('is_verified', 'rating')
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )