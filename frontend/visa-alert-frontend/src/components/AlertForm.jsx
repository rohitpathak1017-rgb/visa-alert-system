import { useState } from "react";
import API from "../api";

export default function AlertForm({ fetchAlerts }) {
  const [form, setForm] = useState({
    country: "",
    city: "",
    visaType: "Tourist",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/alerts", form);
    fetchAlerts();
    setForm({ country: "", city: "", visaType: "Tourist" });
  };

  return (
    <form onSubmit={handleSubmit} className="alert-form">
  <div className="input-group">
    <input
      className="form-input"
      placeholder="Country"
      value={form.country}
      onChange={(e) => setForm({ ...form, country: e.target.value })}
    />
    <input
      className="form-input"
      placeholder="City"
      value={form.city}
      onChange={(e) => setForm({ ...form, city: e.target.value })}
    />
    <select
      className="form-select"
      value={form.visaType}
      onChange={(e) => setForm({ ...form, visaType: e.target.value })}
    >
      <option>Tourist</option>
      <option>Business</option>
      <option>Student</option>
    </select>
  </div>
  <button type="submit" className="submit-btn">Create Alert</button>
</form>
  );
}
