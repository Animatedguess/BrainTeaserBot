import { Outlet } from "react-router-dom";
import CongratulationPage from "./pages/CongratulationPage.pages";
import HomePage from "./pages/HomePage";
import QuizGamePage from "./pages/QuizGamePage.pages";
import QuizStartPage from "./pages/QuizStartPage.pages";

function App() {
  return (
    <div className="overflow-y-hidden">
      <Outlet/>
    </div>
  );
}

export default App;
