import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<string>("Placeholder");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((text) => setData(text))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div>
        <h1>{data}</h1>
      </div>
    </>
  );
}

export default App;
