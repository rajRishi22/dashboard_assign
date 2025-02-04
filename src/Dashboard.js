import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your actual API URL
  const API_URL = "https://your-api-endpoint.com/tasks";

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setTasks(data.issues); // Ensure the API response structure matches
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const getInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "15px" }}>
      {tasks.map((task) => (
        <div key={task.key} style={{ background: "#2c2c2c", color: "white", padding: "15px", borderRadius: "10px", boxShadow: "2px 2px 10px rgba(0,0,0,0.3)" }}>
          <p style={{ fontWeight: "bold", fontSize: "16px" }}>{task.key}</p>
          <p style={{ fontSize: "14px", marginBottom: "5px" }}>{task.summary}</p>
          <p style={{ fontSize: "12px", marginBottom: "5px", color: "#b0b0b0" }}>
            <strong>Status:</strong> {task.status} | <strong>Priority:</strong> {task.priority}
          </p>
          <p style={{ fontSize: "12px", marginBottom: "5px", color: "#b0b0b0" }}>
            <strong>Created:</strong> {task.created.date} | <strong>Duration:</strong> {task.created.durationHuman}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "10px" }}>
            <div style={{ width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#008CBA", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "white" }}>
              {getInitials(task.assignee.name)}
            </div>
            <p style={{ fontSize: "14px" }}>{task.assignee.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;