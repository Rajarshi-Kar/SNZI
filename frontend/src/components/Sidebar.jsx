import { useState } from "react";

function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = ["Upload", "Results", "Map", "Analytics"];

  return (
    <div style={styles.sidebar} className="sidebar">
      {menuItems.map((item) => (
        <p
          key={item}
          onClick={() => setActiveTab(item)}
          style={{
            ...styles.item,
            background: activeTab === item ? "#1e293b" : "transparent",
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}


const styles = {
  sidebar: {
    width: "220px",
    background: "#0f172a",
    color: "white",
    padding: "20px",
    height: "100%",
  },
  item: {
    padding: "10px",
    borderRadius: "6px",
    cursor: "pointer",
    marginBottom: "10px",
  },
};

export default Sidebar;
