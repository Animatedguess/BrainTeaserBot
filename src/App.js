import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="overflow-y-hidden">
      <Outlet/>
    </div>
  );
}

export default App;
