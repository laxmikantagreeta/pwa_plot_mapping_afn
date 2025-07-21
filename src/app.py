from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import base64

app = Flask(__name__)
CORS(app)

# Bayer API credentials (Basic Auth)
BAYER_AUTH = "System:3VnznHx6bASVvsxhbea8TAFeKa7CFYvZyL+/M8G0SNg="
AUTH_HEADER = {
    "Authorization": "Basic " + base64.b64encode(BAYER_AUTH.encode()).decode()
}

# ----------- ENDPOINTS -----------

# ✅ 1. Bayer Reference Data (Year, Season, State)
@app.route("/api/bayer/reference", methods=["GET"])
def get_reference_data():
    try:
        res = requests.get(
            "https://bayer.agreeta.com/agFarm_Bayer_Kharif25_WebAPI_Outlet/api/SSMAKMLClassification",
            headers=AUTH_HEADER,
        )
        return jsonify(res.json())
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ✅ 2. KML List (based on selected filters)
@app.route("/api/getKMLs", methods=["GET"])
def get_kmls():
    year_id = request.args.get("yearId")
    season_id = request.args.get("seasonId")
    state_id = request.args.get("stateId")
    
    # 🔁 TODO: Replace with SQL lookup
    kmls = [
        {"id": "KML001", "name": f"KML for {state_id}-{year_id}-{season_id}"},
        {"id": "KML002", "name": "KML Backup Option"}
    ]
    return jsonify(kmls)


# ✅ 3. Available Dates for selected KML
@app.route("/api/getDates", methods=["GET"])
def get_dates():
    kml_id = request.args.get("kmlId")

    # 🔁 TODO: Replace with database query
    dates = ["2024-07-01", "2024-07-10", "2024-07-20"]
    return jsonify(dates)


# ✅ 4. Return KML Boundary (mock data)
@app.route("/api/getKMLBoundary", methods=["GET"])
def get_kml_boundary():
    kml_id = request.args.get("kmlId")

    # 🔁 TODO: Parse real KML or store boundaries in DB
    boundary = [
        {"lat": 17.8801, "lng": 75.5501},
        {"lat": 17.8805, "lng": 75.5520},
        {"lat": 17.8790, "lng": 75.5530},
        {"lat": 17.8785, "lng": 75.5512},
    ]
    return jsonify(boundary)


# ✅ 5. NDVI/NDMI data for a KML + Date
@app.route("/api/getData", methods=["GET"])
def get_ndvi_data():
    kml_id = request.args.get("kmlId")
    date = request.args.get("date")
    index = request.args.get("index", "NDVI")

    # 🔁 TODO: Query your SQL database
    data = [
        {"lat": 17.8802, "lng": 75.5505, "value": 0.42},
        {"lat": 17.8803, "lng": 75.5506, "value": 0.37},
        {"lat": 17.8804, "lng": 75.5507, "value": 0.28},
    ]
    return jsonify(data)


# Run the Flask server
if __name__ == "__main__":
    app.run(debug=True, port=5000)
