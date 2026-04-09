import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api/message")
      .then(res => setMsg(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Skill 13 Project</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;