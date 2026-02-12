Here is a **minimal temporary README** you can use now. Paste this into `README.md`.

---

# SNZI – Societal Neglected Zone Identifier

## Overview

SNZI is a system to detect neglected urban zones (garbage, potholes, broken roads, waterlogging, damaged infrastructure) from images and video frames using computer vision.

## Tech Stack

* Backend: Flask (Python)
* ML: YOLOv8 (Ultralytics)
* Database: PostgreSQL (planned)
* Frontend: TBD

## Project Structure

```
backend/    # Flask API, DB layer
models/     # ML training + inference wrapper
frontend/   # Web UI (to be added)
dataset/    # Dataset metadata and small samples (no full data)
docs/       # Architecture and notes
scripts/    # Utility scripts
```

## Setup (Backend)

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .\.venv\Scripts\activate
pip install -r requirements.txt
python backend/app.py
```

## API Endpoints

* `GET /health`
  Returns service status.

* `POST /upload-image`
  Uploads an image and returns mock detections (ML integration pending).

## Environment Variables

Create `.env` (do not commit):

```
DATABASE_URL=postgresql://user:password@localhost:5432/snzid
MODEL_PATH=models/yolov8_baseline.pt
```

## Git Workflow

* Work on feature branches only.
* Open PRs to `dev`.
* Do not push directly to `dev` or `main`.

## Notes

* This README is temporary and will be expanded later.
* Full datasets and model weights are not stored in Git.

---
