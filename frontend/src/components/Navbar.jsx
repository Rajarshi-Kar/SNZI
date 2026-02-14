function Navbar() {
  return (
    <div style={styles.navbar}>
      Societal Neglected Zone Identifier
    </div>
  );
}

const styles = {
  navbar: {
    height: "60px",
    background: "#1e293b",
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default Navbar;
