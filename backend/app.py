import os 
from flask import Flask, request, jsonify
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})

@app.route("/upload-image", methods=["POST"])
def upload_image():
    if 'image' not in request.files:
        return jsonify({"error": "File is required"}), 400
    
    image = request.files['image']

    image_bytes = file.read()


