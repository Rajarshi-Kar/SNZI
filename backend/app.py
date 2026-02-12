import os 
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from models.inference.detector import run_inference

load_dotenv()

app = Flask(__name__)

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})

@app.route("/upload-image", methods=["POST"])
def upload_image():
    if "image" not in request.files:
        return jsonify({"error": "image file is required"}), 400

    image = request.files["image"]
    image_bytes = image.read()

    detections = run_inference(image_bytes)

    return jsonify({
        "image_id": "mock-id",
        "detections": detections,
        "model_version": os.getenv("MODEL_PATH", "unknown")
    })



