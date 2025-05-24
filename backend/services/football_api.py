import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_FOOTBALL_KEY")
BASE_URL = "https://v3.football.api-sports.io"

HEADERS = {
    "x-apisports-key": API_KEY
}

def get_live_matches():
    url = f"{BASE_URL}/fixtures?live=all"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.json()
    return {"error": "Ni bilo mogoče pridobiti podatkov"}
