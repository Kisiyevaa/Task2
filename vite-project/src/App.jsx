import { useRoutes } from "react-router-dom";
import { routes } from "./pages/routes";
import { Footer, Header } from "./components";

function App() {
  const taskRouting = useRoutes(routes);

  return (
    <div>
      <Header />
      {taskRouting}
      <Footer />
    </div>
  );
}

export default App;
