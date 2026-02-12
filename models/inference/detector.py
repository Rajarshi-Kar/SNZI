def run_inference(image_bytes: bytes) -> list[dict]:
    """
    Contract:
    Returns a list of detections with keys:
    - class: str
    - confidence: float
    - bbox: [x1, y1, x2, y2]
    """
    return [
        {"class": "garbage", "confidence": 0.5, "bbox": [0, 0, 10, 10]}
    ]
