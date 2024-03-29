import React from "react";

export default function HomeHead() {
  return (
    <div
      style={{
        display: "flex",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Tasks To-Do</h2>
      <div className="profile">
        <img src="../../public/images/profile.png" alt="Profile" width={100} />
      </div>
    </div>
  );
}