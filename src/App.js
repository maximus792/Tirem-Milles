import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage/MainPage";
import ExercisesPage from "./components/Pages/Exercises/ExercisesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/exercises" element={<ExercisesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
