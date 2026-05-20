import { useNavigate } from "react-router-dom";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

export default function Login() {
  const nav = useNavigate();

  return (
    <div style={styles.wrap}>
      <h1 style={styles.title}>Signin to your PopX account</h1>
      <p style={styles.sub}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div style={{ marginTop: 18 }}>
        <Input label="Email Address" placeholder="Enter email address" />
        <Input label="Password" placeholder="Enter password" type="password" />
      </div>

      <div style={{ marginTop: 10 }}>
        <Button onClick={() => nav("/profile")}>Login</Button>
      </div>
    </div>
  );
}

const styles = {
  wrap: { padding: 24, width: "100%" },
  title: { margin: 0, fontSize: 22, fontWeight: 800, lineHeight: 1.2 },
  sub: { marginTop: 10, marginBottom: 0, color: "var(--muted)", lineHeight: 1.4 },
};