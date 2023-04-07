import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Pages/MainPage/MainPage";
import ExercisesPage from "./components/Pages/Index/ExercisesPage";
import Page from "./components/Pages/Exercises/Page";
import Act1 from "./components/Pages/Exercises/Activities/Act1/Act1";
import Act3 from "./components/Pages/Exercises/Activities/Act3/Act3";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/exercises" element={<ExercisesPage />}></Route>
        <Route path="/exercises-1" element={<Page chapter={1} activity={[<Act1 key={1}/>, <Act1 key={2}/>, <Act1 key={3}/>, <Act1 key={4}/>, <Act1 key={5}/>, <Act1 key={6}/>]}/>}></Route>
        <Route path="/exercises-2" element={<Page chapter={2} activity={[<Act1 key={1}/>, <Act1 key={2}/>, <Act1 key={3}/>, <Act1 key={4}/>, <Act1 key={5}/>, <Act1 key={6}/>]}/>}></Route>
        <Route path="/exercises-3" element={<Page chapter={3} activity={[<Act3 key={1}/>, <Act3 key={2}/>, <Act3 key={3}/>, <Act3 key={4}/>, <Act3 key={5}/>, <Act3 key={6}/>]}/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}


export default App;
