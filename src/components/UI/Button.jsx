import "./Button.css";

export default function Button({ variant = "primary", fullWidth = true, ...props }) {
  const cls = `btn btn--${variant} ${fullWidth ? "btn--full" : ""}`;
  return <button className={cls} {...props} />;
}