import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import MainPage from "./components/Pages/MainPage/MainPage";
import ExercisesPage from "./components/Pages/Index/ExercisesPage";
import Page from "./components/Pages/Exercises/Page";
import Act1 from "./components/Pages/Exercises/Activities/Act1/Act1";
import Act2 from "./components/Pages/Exercises/Activities/Act2/Act2";
import Act3 from "./components/Pages/Exercises/Activities/Act3/Act3";
import Act4 from "./components/Pages/Exercises/Activities/Act4/Act4";
import Act5 from "./components/Pages/Exercises/Activities/Act5/Act5";
import Act6Cast from "./components/Pages/Exercises/Activities/Act6-cast/Act6-cast";
import Act6Cat from "./components/Pages/Exercises/Activities/Act6-cat/Act6-cat";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"/exercises"} element={<ExercisesPage />}></Route>
          <Route
            path={"/exercises/1/:language"}
            element={
              <Page
                chapter={1}
                activity={[
                  <Act1 key={1} />,
                  <Act1 key={2} />,
                  <Act1 key={3} />,
                  <Act1 key={4} />,
                  <Act1 key={5} />,
                  <Act1 key={6} />,
                  <Act1 key={7} />,
                ]}
              />
            }
          ></Route>
          <Route
            path={"/exercises/2/:language"}
            element={
              <Page
                chapter={2}
                activity={[
                  <Act2 key={1} />,
                  <Act2 key={2} />,
                  <Act2 key={3} />,
                  <Act2 key={3} />,
                  <Act2 key={4} />,
                  <Act2 key={6} />,
                  <Act2 key={7} />,
                ]}
              />
            }
          ></Route>
          <Route
            path={"/exercises/3/:language"}
            element={
              <Page
                chapter={3}
                activity={[
                  <Act3 key={1} />,
                  <Act3 key={2} />,
                  <Act3 key={3} />,
                  <Act3 key={4} />,
                  <Act3 key={5} />,
                  <Act3 key={6} />,
                  <Act3 key={6} />,
                  <Act3 key={6} />,
                ]}
              />
            }
          ></Route>
          <Route
            path={"/exercises/4/:language"}
            element={
              <Page
                chapter={4}
                activity={[
                  <Act4 key={1} />,
                  <Act4 key={2} />,
                  <Act4 key={3} />,
                  <Act4 key={4} />,
                  <Act4 key={5} />,
                  <Act4 key={6} />,
                  <Act4 key={7} />,
                  <Act4 key={8} />,
                  <Act4 key={9} />,
                ]}
              />
            }
          ></Route>
          <Route
            path={"/exercises/5/:language"}
            element={
              <Page
                chapter={5}
                activity={[
                  <Act5 key={1} actID={1} />,
                  <Act5 key={2} actID={2} />,
                  <Act5 key={3} actID={3} />,
                  <Act5 key={4} actID={4} />,
                  <Act5 key={5} actID={5} />,
                  <Act5 key={6} actID={6} />,
                  <Act5 key={7} actID={7} />,
                  <Act5 key={8} actID={8} />,
                  <Act5 key={9} actID={9} />,
                ]}
              />
            }
          ></Route>

          <Route
            path={"/exercises/6/cat"}
            element={
              <Page
                chapter={6}
                activity={[
                  <Act6Cat key={2} />,
                  <Act6Cat key={3} />,
                  <Act6Cat key={4} />,
                  <Act6Cat key={5} />,
                  <Act6Cat key={1} />,
                  <Act6Cat key={6} />,
                  <Act6Cat key={7} />,
                  <Act6Cat key={8} />,
                  <Act6Cat key={9} />,
                ]}
              />
            }
          ></Route>

          <Route
            path={"/exercises/6/cast"}
            element={
              <Page
                chapter={6}
                activity={[
                  <Act6Cast key={1} actID={1} />,
                  <Act6Cast key={2} actID={2} />,
                  <Act6Cast key={3} actID={3} />,
                  <Act6Cast key={4} actID={4} />,
                  <Act6Cast key={5} actID={5} />,
                  <Act6Cast key={6} actID={6} />,
                  <Act6Cast key={7} actID={7} />,
                  <Act6Cast key={8} actID={8} />,
                  <Act6Cast key={9} actID={9} />,
                ]}
              />
            }
          ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
