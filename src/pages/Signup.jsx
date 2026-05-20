import { useNavigate } from "react-router-dom";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

export default function Signup() {
  const nav = useNavigate();

  return (
    <div style={styles.wrap}>
      <h1 style={styles.title}>Create your PopX account</h1>

      <div style={{ marginTop: 18 }}>
        <Input label="Full Name*" placeholder="Marry Doe" />
        <Input label="Phone number*" placeholder="Marry Doe" />
        <Input label="Email address*" placeholder="Marry Doe" />
        <Input label="Password*" placeholder="Marry Doe" type="password" />
        <Input label="Company name" placeholder="Marry Doe" />

        <div style={{ marginTop: 10 }}>
          <div style={styles.radioLabel}>Are you an Agency?*</div>
          <div style={styles.radioRow}>
            <label style={styles.radioItem}>
              <input type="radio" name="agency" defaultChecked />
              <span style={{ marginLeft: 8 }}>Yes</span>
            </label>
            <label style={styles.radioItem}>
              <input type="radio" name="agency" />
              <span style={{ marginLeft: 8 }}>No</span>
            </label>
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ paddingTop: 18 }}>
        <Button onClick={() => nav("/profile")}>Create Account</Button>
      </div>
    </div>
  );
}

const styles = {
  wrap: {
    padding: 24,
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  title: { margin: 0, fontSize: 22, fontWeight: 800, lineHeight: 1.2 },
  radioLabel: { fontSize: 13, fontWeight: 700, marginBottom: 8 },
  radioRow: { display: "flex", gap: 16, alignItems: "center" },
  radioItem: { display: "flex", alignItems: "center", fontWeight: 600 },
};