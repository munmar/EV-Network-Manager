// API call for the charger sessions

export async function fetchSessions() {
    return await fetch('http://127.0.0.1:8000/stations/api/sessions/')
        .then((response) => response.json())
        .then((json_data) => json_data)
}