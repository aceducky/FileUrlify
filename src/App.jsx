import { useState } from "react";
import Form from "./Form";
import upload_services from "./upload_services.js";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);
  const [service, setService] = useState(upload_services["file.io"]);

  return (
    <div className="w-screen h-screen font-sans">
      <Form
        files={files}
        setFiles={setFiles}
        service={service}
        setService={setService}
      />
    </div>
  );
}

export default App;
