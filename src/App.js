import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
