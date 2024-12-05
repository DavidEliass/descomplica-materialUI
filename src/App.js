// import Header from "./components/header";
// import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "./pages/login/login";
import Home from "./pages/home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
