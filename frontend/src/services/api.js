import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const checkHealth = () => API.get("/health");

export const uploadImage = (formData) =>
  API.post("/upload-image", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
