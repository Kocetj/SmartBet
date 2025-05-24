from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from services.football_api import get_live_matches

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/live")
def read_live_matches():
    return get_live_matches()
