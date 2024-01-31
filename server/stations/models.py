from django.db import models


# Create your models here.
class ChargerStation(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Charger(models.Model):
    serial_number = models.CharField(max_length=255, unique=True)
    charger_type = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    station = models.ForeignKey(ChargerStation, on_delete=models.CASCADE)

    def __str__(self):
        return self.serial_number


class Session(models.Model):
    charger = models.ForeignKey(Charger, on_delete=models.CASCADE)
    usage_kwh = models.DecimalField(max_digits=10, decimal_places=2)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    revenue = models.DecimalField(max_digits=10, decimal_places=2)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def __str__(self):
        return f"Session {self.id} at {self.charger} - {self.start_time}"