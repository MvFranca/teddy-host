import { BrowserRouter, Routes, Route } from "react-router-dom";
const RemoteWelcome = await import("welcome/Welcome");

function App() {
  const Welcome = RemoteWelcome.default;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
