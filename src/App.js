import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import { useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div
          className="loader"
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MoonLoader
            className="loader"
            color={"#186cff"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <main className="app">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      )}
    </>
  );
}
