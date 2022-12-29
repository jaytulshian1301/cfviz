import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import UserHandle from "./components/UserHandle";
import Result from "./components/Result";

function App() {
  const [name, setName] = useState<string>("");

  return (
    <div className="App">
      <UserHandle updateName={setName} />
      {name !== "" && <Result userhandle={name} />}
    </div>
  );
}

export default App;
