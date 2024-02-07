// API call for the charger stations
export async function fetchStations() {
    return await fetch('http://127.0.0.1:8000/stations/api/chargerstations/')
        .then((response) => response.json())
        .then((json_data) => json_data)
}