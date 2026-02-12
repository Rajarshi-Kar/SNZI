import { useState } from "react";
import { uploadImage } from "../services/api";

function ImageUpload() {
    const [imageFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setPreview(URL.createObjectURL(file));
            setResult(null);
        }
    };


    const handleAnalyze = async () => {
        if (!imageFile) return;

        setLoading(true);
        setResult(null);

        const formData = new FormData();
        formData.append("file", imageFile);

        try {
            const response = await uploadImage(formData);
            setResult(response.data.detections);
        } catch (error) {
            console.log(error);
            setResult([{ label: "Error connecting to server", confidence: "" }]);
        }

        setLoading(false);
    };


    return (
        <div style={styles.card}>
            <h3>Upload Image</h3>

            <input type="file" accept="image/*" onChange={handleImageChange} />

            {preview && (
                <>
                    <div style={styles.previewContainer}>
                        <p>Preview:</p>
                        <img src={preview} alt="preview" style={styles.preview} />
                    </div>

                    <button style={styles.button} onClick={handleAnalyze}>
                        Analyze Image
                    </button>
                </>
            )}

            {loading && <p style={styles.loading}>Analyzing... ⏳</p>}

            {result && (
                <div style={styles.resultBox}>
                    <h4>Detections</h4>
                    {result.map((item, index) => (
                        <div key={index} style={styles.cardResult}>
                            <span style={styles.label}>{item.label}</span>
                            <span style={styles.confidence}>{item.confidence}</span>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

const styles = {
    card: {
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        maxWidth: "450px",
    },
    previewContainer: {
        marginTop: "15px",
    },
    preview: {
        width: "100%",
        borderRadius: "8px",
    },
    button: {
        marginTop: "10px",
        padding: "10px 15px",
        background: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
    },
    loading: {
        marginTop: "10px",
        color: "#f59e0b",
        fontWeight: "bold",
    },
    resultBox: {
        marginTop: "15px",
        padding: "10px",
        background: "#e2e8f0",
        borderRadius: "6px",
    },
    cardResult: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 10px",
        marginTop: "8px",
        background: "#ffffff",
        borderRadius: "6px",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    },

    label: {
        fontWeight: "bold",
        color: "#1e293b",
    },

    confidence: {
        color: "#2563eb",
        fontWeight: "bold",
    },
};

export default ImageUpload;
