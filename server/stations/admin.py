from django.contrib import admin
from .models import ChargerStation, Charger, Session


# Register your models here.
admin.site.register([ChargerStation, Charger, Session])
