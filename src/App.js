import React from "react";

const Dashboard = () => {
  const tasks = {
    issues: [
      {
        key: "CTS-35247",
        summary: "IM Voucher Validity Issue",
        status: "Backlog",
        assignee: { name: "Ayush Pruthi" },
        priority: "Critical",
        created: {
          date: "2025-02-04 04:07:33",
          durationDays: 0,
          durationHuman: "7 hours",
        },
      },
      {
        key: "CTS-35248",
        summary: "Payment Processing Delay",
        status: "In Progress",
        assignee: { name: "Rohit Verma" },
        priority: "High",
        created: {
          date: "2025-02-03 14:25:10",
          durationDays: 1,
          durationHuman: "1 day",
        },
      },
      {
        key: "CTS-35249",
        summary: "API Timeout Error",
        status: "Completed",
        assignee: { name: "Neha Gupta" },
        priority: "Medium",
        created: {
          date: "2025-02-02 10:12:45",
          durationDays: 2,
          durationHuman: "2 days",
        },
      },
    ],
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getDurationStatus = (durationDays) => {
    if (durationDays >= 1) {
      return { text: "Duration Outdated", color: "#ff4444" };
    }
    return { text: "Just Created", color: "#4CAF50" };
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Column - Navigation */}
      <div style={{ 
        width: "25%", 
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRight: "1px solid #ddd"
      }}>
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Navigation</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ padding: "12px 0", cursor: "pointer", borderBottom: "1px solid #ddd" }}>Dashboard</li>
          <li style={{ padding: "12px 0", cursor: "pointer", borderBottom: "1px solid #ddd" }}>Projects</li>
          <li style={{ padding: "12px 0", cursor: "pointer", borderBottom: "1px solid #ddd" }}>Tasks</li>
          <li style={{ padding: "12px 0", cursor: "pointer", borderBottom: "1px solid #ddd" }}>Reports</li>
        </ul>
      </div>

      {/* Right Column - Task Cards */}
      <div style={{ width: "75%", padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {tasks.issues.map((task) => (
            <div key={task.key} style={{ 
              background: "#2c2c2c", 
              color: "white", 
              padding: "15px", 
              borderRadius: "10px", 
              boxShadow: "2px 2px 10px rgba(0,0,0,0.3)",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between"
            }}>
              {/* Left side content */}
              <div style={{ width: "60%" }}>
                <div style={{ marginBottom: "10px" }}>
                  <p style={{ fontWeight: "bold", fontSize: "16px" }}>{task.key}</p>
                  <p style={{ fontSize: "14px", marginTop: "5px" }}>{task.summary}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ 
                    width: "35px", 
                    height: "35px", 
                    borderRadius: "50%", 
                    backgroundColor: "#008CBA", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: "bold", 
                    color: "white" 
                  }}>
                    {getInitials(task.assignee.name)}
                  </div>
                  <p style={{ fontSize: "14px" }}>{task.assignee.name}</p>
                </div>
              </div>

              {/* Right side content */}
              <div style={{ 
                width: "35%", 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between",
                alignItems: "flex-end" 
              }}>
                <div>
                  <p style={{ fontSize: "12px", color: "#b0b0b0", marginBottom: "5px" }}>
                    <strong>Status:</strong> {task.status}
                  </p>
                  <p style={{ fontSize: "12px", color: "#b0b0b0" }}>
                    <strong>Priority:</strong> {task.priority}
                  </p>
                </div>
                <p style={{ 
                  fontSize: "12px", 
                  color: getDurationStatus(task.created.durationDays).color,
                  fontWeight: "bold" 
                }}>
                  {getDurationStatus(task.created.durationDays).text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <Dashboard />
  </div>
);

export default App;