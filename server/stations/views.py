from rest_framework import generics
from .models import ChargerStation, Charger, Session
from .serializers import ChargerStationSerializer, ChargerSerializer, SessionSerializer


# Create your views here.
class ChargerStationList(generics.ListAPIView):
    queryset = ChargerStation.objects.all().prefetch_related('charger_set')
    serializer_class = ChargerStationSerializer

class ChargerList(generics.ListAPIView):
    queryset = Charger.objects.all()
    serializer_class = ChargerSerializer

class SessionList(generics.ListAPIView):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
