import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";

export default function Landing() {
  const nav = useNavigate();

  return (
    <div style={styles.wrap}>
      <div style={{ flex: 1 }} />
      <div>
        <h1 style={styles.title}>Welcome to PopX</h1>
        <p style={styles.sub}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div style={{ marginTop: 18 }}>
          <Button onClick={() => nav("/signup")}>Create Account</Button>
          <div style={{ height: 10 }} />
          <Button variant="secondary" onClick={() => nav("/login")}>
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrap: { padding: 24, display: "flex", flexDirection: "column", width: "100%" },
  title: { margin: 0, fontSize: 26, fontWeight: 800 },
  sub: { marginTop: 8, marginBottom: 0, color: "var(--muted)", lineHeight: 1.4 },
};
