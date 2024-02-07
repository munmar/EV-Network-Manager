from django.urls import path
from .views import ChargerStationList, ChargerList, SessionList


urlpatterns = [
    path('api/chargerstations/', ChargerStationList.as_view(), name='chargerstation_list'),
    path('api/chargers/', ChargerList.as_view(), name='charger_list'),
    path('api/sessions/', SessionList.as_view(), name='session_list'),
]
