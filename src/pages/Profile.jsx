export default function Profile() {
  return (
    <div style={styles.wrap}>
      <div style={styles.header}>Account Settings</div>
      <div style={styles.profileRow}>
        <div style={styles.avatar}>M</div>
        <div>
          <div style={styles.name}>Marry Doe</div>
          <div style={styles.email}>Marry@gmail.com</div>
        </div>
      </div>
      <div style={styles.desc}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
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
    gap: 24,
  },
  header: {
    fontWeight: 800,
    fontSize: 18,
    marginBottom: 10,
  },
  profileRow: {
    display: "flex",
    alignItems: "center",
    gap: 17,
    marginBottom: 6,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: "50%",
    background: "#e0e7ff",
    color: "#6c25ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 26,
    fontWeight: 700,
    marginRight: 6,
  },
  name: {
    fontWeight: 700,
    fontSize: 18,
  },
  email: {
    fontSize: 15,
    color: "#a1a1aa",
    fontWeight: 500,
    marginTop: 4,
  },
  desc: {
    fontSize: 15,
    color: "#6b7280",
    fontWeight: 500,
    marginTop: 5,
    lineHeight: 1.5,
  },
};