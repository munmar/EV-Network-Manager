from rest_framework import serializers
from .models import ChargerStation, Charger, Session


class ChargerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Charger
        fields = ['id', 'serial_number', 'charger_type', 'charger_capacity', 'status']


class ChargerStationSerializer(serializers.ModelSerializer):
    charger_set = ChargerSerializer(many=True, read_only=True)
    class Meta:
        model = ChargerStation
        fields = ['id', 'name', 'location', 'charger_set']


class SessionSerializer(serializers.ModelSerializer):
    charger = ChargerSerializer(many=False, read_only=True)
    class Meta:
        model = Session
        fields = ['id', 'charger', 'usage_kwh', 'cost', 'revenue', 'start_time', 'duration', 'end_time']
