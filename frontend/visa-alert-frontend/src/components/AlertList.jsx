import API from "../api";

export default function AlertList({ alerts, fetchAlerts }) {
  const updateStatus = async (id) => {
    await API.put(`/alerts/${id}`, { status: "Booked" });
    fetchAlerts();
  };

  const deleteAlert = async (id) => {
    await API.delete(`/alerts/${id}`);
    fetchAlerts();
  };

  return (
    <div className="alerts-container">
  <h2 className="alerts-subtitle">Active Alerts</h2>
  <div className="alerts-grid">
    {alerts.map((a) => (
      <div key={a._id} className="alert-card">
        <div className="alert-info">
          <div className="alert-location">
            <strong>{a.country}</strong> <span>{a.city}</span>
          </div>
          <div className="alert-details">
            <span className="visa-badge">{a.visaType}</span>
            <span className={`status-badge ${a.status.toLowerCase()}`}>
              {a.status}
            </span>
          </div>
        </div>
        
        <div className="alert-actions">
          <button className="btn-booked" onClick={() => updateStatus(a._id)}>
            Mark Booked
          </button>
          <button className="btn-delete" onClick={() => deleteAlert(a._id)}>
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}
