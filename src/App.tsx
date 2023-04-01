import React, { useState } from "react";
import Excel from "./modules/Excel";
import Morse from "./modules/Morse";
import { NavTab } from "./types/types";
import "./app.css";

function App() {
  const [component, setComponent] = useState(NavTab.Morse);
  return (
    <div>
      <button
        className="switch-button"
        onClick={() =>
          setComponent(component === NavTab.Morse ? NavTab.Excel : NavTab.Morse)
        }
      >
        Przejdz do {component === NavTab.Morse ? "Excel" : "Morse"}
      </button>
      {component === NavTab.Morse && <Morse />}
      {component === NavTab.Excel && <Excel />}
    </div>
  );
}

export default App;
