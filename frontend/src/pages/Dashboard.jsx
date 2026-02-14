import { useEffect, useState } from "react";
import { checkHealth } from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ImageUpload from "../components/ImageUpload";


function Dashboard() {
    const [backendStatus, setBackendStatus] = useState("Checking");
    const [activeTab, setActiveTab] = useState("Upload");

    useEffect(() => {
        checkHealth()
            .then(() => setBackendStatus("Backend Connected "))
            .catch(() => setBackendStatus("Backend Offline "));
    }, []);

    return (
        <div>
            <Navbar />
            <div style={styles.container} className="layout-container">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <div style={styles.main}>
                    <h2>{activeTab}</h2>
                    <p>{backendStatus}</p>

                    {activeTab === "Upload" && <ImageUpload />}
                    {activeTab === "Results" && (
                        <div>
                            <h3>Detection Results</h3>
                            <div style={styles.resultsGrid}>
                                <div style={styles.resultCard}>Potholes detected today: --</div>
                                <div style={styles.resultCard}>Garbage spots reported: --</div>
                                <div style={styles.resultCard}>Infrastructure damage: --</div>
                            </div>
                        </div>
                    )}

                    {activeTab === "Map" && (
                        <div>
                            <h3>Issue Location Map</h3>
                            <div style={styles.mapPlaceholder}>
                                Map integration coming soon
                            </div>
                        </div>
                    )}

                    {activeTab === "Analytics" && (
                        <div>
                            <h3>Analytics Dashboard</h3>
                            <div style={styles.chartPlaceholder}>Charts coming soon</div>
                        </div>
                    )}


                </div>

            </div>
        </div>
    );
}


const styles = {
    container: {
        display: "flex",
        height: "calc(100vh - 60px)",
        width: "100%",
    },
    main: {
        flex: 1,
        background: "#f1f5f9",
        padding: "20px",
    },
    resultsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
        marginTop: "10px",
    },

    resultCard: {
        background: "white",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    mapPlaceholder: {
        marginTop: "10px",
        height: "300px",
        background: "#cbd5e1",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#1e293b",
        fontWeight: "bold",
    },
    chartPlaceholder: {
        marginTop: "10px",
        height: "250px",
        background: "#e2e8f0",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#334155",
        fontWeight: "bold",
    },



};



export default Dashboard;
