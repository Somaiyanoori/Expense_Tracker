export default function TextInput({
  type = "test",
  label,
  value,
  placeholder,
  onChange,
}) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        className="input"
        placeholder={placeholder}
      />
    </div>
  );
}
