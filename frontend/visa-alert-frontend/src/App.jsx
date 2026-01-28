import { useEffect, useState } from "react";
import API from "./api";
import AlertForm from "./components/AlertForm";
import AlertList from "./components/AlertList";

function App() {
  const [alerts, setAlerts] = useState([]);

  const fetchAlerts = async () => {
    const res = await API.get("/alerts");
    setAlerts(res.data);
  };

 useEffect(() => {
  const fetchAlerts = async () => {
    try {
      const res = await fetch("/api/alerts");
      const data = await res.json();
      setAlerts(data);
    } catch (err) {
      console.error("Error fetching alerts:", err);
    }
  };

  fetchAlerts();
}, []);


  return (
 <div className="dashboard-container">
  <h1 className="dashboard-title">Visa Alerts Dashboard</h1>
  <div className="card">
    <AlertForm fetchAlerts={fetchAlerts} />
  </div>
  <div className="card">
    <AlertList alerts={alerts} fetchAlerts={fetchAlerts} />
  </div>
</div>
  );
}

export default App;
