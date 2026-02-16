import os
from ultralytics import YOLO
import numpy as np
import cv2
from typing import List, Dict

MODEL_PATH = os.getenv("MODEL_PATH", "models/weights/yolo_v1.pt")

CLASS_NAMES = {
    0: "garbage",
    1: "pothole",
    2: "broken_road",
    3: "waterlogging",
    4: "infra_damage",  
}

_model = YOLO(MODEL_PATH)



def _bytes_to_bgr(image_bytes: bytes) -> np.ndarray:
    image_array = np.frombuffer(image_bytes, dtype=np.uint8)
    img = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

    if img is None:
        raise ValueError("Invalid image bytes")

    return img


def run_inference(image_bytes: bytes) -> List[Dict]:
    img = _bytes_to_bgr(image_bytes)

    results = _model.predict(
        source=img,
        conf=0.25,
        device="cpu",
        verbose=False
    )

    detections: List[Dict] = []

    if not results or results[0].boxes is None:
        return detections

    for box in results[0].boxes:
        cls_id = int(box.cls.item())
        conf = float(box.conf.item())
        x1, y1, x2, y2 = map(int, box.xyxy[0].tolist())

        detections.append({
            "class": CLASS_NAMES.get(cls_id, "unknown"),
            "confidence": round(conf, 4),
            "bbox": [x1, y1, x2, y2]
        })

    return detections

'''
for backend team
# test_detector.py
from models.inference.detector import run_inference

with open("test.jpg", "rb") as f:
    detections = run_inference(f.read())

print(detections)
'''